import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type MethodType = "GET" | "POST" | "DELETE";

export default function withHandler(
  method: MethodType,
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (method !== req.method) {
      return res.status(405).end();
    }

    try {
      await fn(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
