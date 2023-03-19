import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  if (!id) {
    return res.status(401).json({ ok: false });
  }

  try {
    const curFavorite = await client.favorite.findFirst({
      where: {
        productId: +id.toString(),
        userId: user?.id,
      },
    });

    if (curFavorite) {
      await client.favorite.delete({
        where: {
          id: curFavorite.id,
        },
      });
    } else {
      await client.favorite.create({
        data: {
          user: {
            connect: {
              id: user?.id,
            },
          },
          product: {
            connect: {
              id: +id.toString(),
            },
          },
        },
      });
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.log(`fail to process favorite. error:${error}`);
    res.status(500).json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
