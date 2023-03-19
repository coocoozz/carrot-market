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
    const product = await client.product.findUnique({
      where: {
        id: +id.toString(),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    if (!product) {
      return res.status(404).json({ ok: false });
    }

    const relatedTerms = product?.name.split(" ").map((word) => ({
      name: {
        contains: word,
      },
    }));

    const relatedProduct = await client.product.findMany({
      where: {
        OR: relatedTerms,
        AND: {
          id: {
            not: product.id,
          },
        },
      },
    });

    const isLiked = Boolean(
      await client.favorite.findFirst({
        where: {
          productId: product.id,
          userId: user?.id,
        },
        select: {
          id: true,
        },
      })
    );

    res.status(200).json({ ok: true, product, isLiked, relatedProduct });
  } catch (error) {
    console.log(`fail to get product. error:${error}`);
    res.status(500).json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
