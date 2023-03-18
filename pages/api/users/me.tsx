import { withIronSessionApiRoute } from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (!req.session.user) {
    return res.status(404).end();
  }

  const curUser = await client.user.findUnique({
    where: {
      id: req.session.user.id,
    },
  });

  res.json({
    ok: true,
    ...curUser,
  });
}

export default withApiSession(withHandler("GET", handler));
