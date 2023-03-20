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
  } = req;
  if (!id) {
    return res.status(401).json({ ok: false });
  }

  try {
    const post = await client.post.findUnique({
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
        answers: {
          select: {
            id: true,
            answer: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
        _count: {
          select: {
            answers: true,
            wonderings: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ ok: false });
    }
    res.status(200).json({ ok: true, post });
  } catch (error) {
    console.log(`fail to get post. error:${error}`);
    res.status(500).json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
