import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.json({ ok: true });
  res.status(200).end();
}

export default withHandler("POST", handler);
