import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { Product } from "@prisma/client";
import useSWR from "swr";

interface ProductWithCount extends Product {
  _count: {
    favorites: number;
  };
}

interface ProductResponse {
  ok: boolean;
  products: ProductWithCount[];
}

function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductResponse>("/api/products");

  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col divide-y-[1px] space-y-3 ">
        {data?.products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            hearts={product._count.favorites}
          />
        ))}

        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
}

export default Home;
