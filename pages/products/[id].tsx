import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Product } from "@prisma/client";
import Link from "next/link";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";

interface ItemDetailResponse {
  ok: boolean;
  product: Product & {
    user: {
      id: number;
      name: string;
      avatar: string | null;
    };
  };
  isLiked: boolean;
  relatedProduct: Product[];
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/favorite`);

  const onFavClick = () => {
    if (!data) {
      return;
    }

    mutate({ ...data, isLiked: !data.isLiked }, false);
    toggleFav({});
  };

  if (!data) {
    return (
      <Layout canGoBack>
        <div className="px-4 py-4">
          <p>loading....</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout canGoBack>
      <div className="px-4 py-4">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex items-center space-x-3 py-3 border-t border-b cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                {data.product.user.name}
              </p>
              <Link href={`/users/profiles/${data.product.user.id}`}>
                <a className="text-xs font-medium text-gray-500">
                  View profile &rarr;
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data.product.name}
            </h1>
            <span className="text-2xl mt-3 block">${data.product.price}</span>
            <p className="text-base my-6 text-gray-700">
              {data.product.description}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button text="Talk to seller" />

              <button
                onClick={onFavClick}
                className={cls(
                  "p-3 rounded-md flex items-center hover:bg-gray-100 justify-center ",
                  data?.isLiked
                    ? "text-red-500  hover:text-red-600"
                    : "text-gray-400  hover:text-gray-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {data.relatedProduct.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="cursor-pointer">
                  <div className="h-56 w-full bg-slate-300 mb-4" />
                  <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                  <span className="text-xs font-medium text-gray-900">
                    ${product.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
