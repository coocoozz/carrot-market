import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

function Chats() {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/chats/${i}`}>
            <a className="flex px-4 items-center space-x-3 py-3 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="font-medium text-gray-700">Steve Jebs</p>
                <p className="text-sm font-medium text-gray-500">
                  See you tomoroow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Chats;
