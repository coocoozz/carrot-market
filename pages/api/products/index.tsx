import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;

    try {
      const product = await client.product.create({
        data: {
          name,
          price: +price,
          description,
          image: "xx",
          user: {
            connect: {
              id: user?.id,
            },
          },
        },
      });
      res.status(200).json({
        ok: true,
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ ok: false });
    }
  }

  if (req.method === "GET") {
    try {
      const products = await client.product.findMany({
        include: {
          _count: {
            select: {
              favorites: true,
            },
          },
        },
      });
      res.status(200).json({ ok: true, products });
    } catch (error) {
      console.log(`fail to get products list. error: ${error}`);
      res.status(500).json({ ok: false });
    }
  }
}

export default withApiSession(
  withHandler({ methods: ["POST", "GET"], handler })
);
