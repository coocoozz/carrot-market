import { NextPage } from 'next';

const Streams: NextPage = () => {
  return (
    <div className="py-10 space-y-4 divide-y-[1px]">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div key={i} className="px-4 pt-4">
          <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
          <h1 className="text-2xl mt-2 font-bold text-gray-900">Galaxy 550</h1>
        </div>
      ))}

      <button className="fixed hover:bg-orange-500 transition-colors cursor-pointer  bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 border-transparent text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Streams;
