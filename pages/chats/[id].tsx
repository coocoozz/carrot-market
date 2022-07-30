import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 pb-16 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="max-w-xs border p-2 border-gray-300 rounded-md text-sm">
          <p>
            Hi how much are you selling them for asdfasdf dsf asdf dsaf sdaf
            adsf asd fads f asdf adsf?
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-reverse space-x-2 items-start">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="max-w-xs border p-2 border-gray-300 rounded-md text-sm">
          <p>I want ￦20,000 asf asdf asdf asdf asdf asdf asd fasd f</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="max-w-xs border p-2 border-gray-300 rounded-md text-sm">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-reverse space-x-2 items-start">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="max-w-xs border p-2 border-gray-300 rounded-md text-sm">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="fixed py-2 bottom-2 bg-white inset-x-0">
        <div className="flex max-w-md items-center w-full mx-auto relative">
          <input
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-400 focus:outline-none pr-12 focus:border-orange-400"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 items-center bg-orange-400 rounded-full px-3 hover:bg-orange-500 text-white text-sm">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
