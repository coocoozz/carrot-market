import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type MethodType = "GET" | "POST" | "DELETE";

type HandlerType = (req: NextApiRequest, res: NextApiResponse) => void;

interface ConfigType {
  methods: MethodType[];
  handler: HandlerType;
  isPrivate?: boolean;
}

export default function withHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).json({ ok: false });
    } else if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "need to login first" });
    }

    try {
      await handler(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
