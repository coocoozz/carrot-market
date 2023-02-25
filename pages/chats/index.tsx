import { useRouter } from "next/router";
import Layout from "../../components/layout";

function Chats() {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(`/chats/${id}`);
  };

  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            onClick={() => onClick(i)}
            className="flex px-4 items-center space-x-3 py-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="font-medium text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-500">
                See you tomoroow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Chats;
