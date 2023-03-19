import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const getToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!getToken) {
    return res.status(404).end();
  }

  req.session.user = {
    id: getToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: getToken.userId,
    },
  });

  return res.status(200).json({ ok: true });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
