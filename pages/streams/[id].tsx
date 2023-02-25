import Layout from "../../components/layout";

function Stream() {
  return (
    <Layout canGoBack>
      <div className="px-4">
        <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
        <h3 className="text-gray-900 font-semibold text-2xl mt-2">
          Try potatos!
        </h3>
        <div className="mt-10 h-[60vh] overflow-y-scroll px-4 space-y-4 pb-16">
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              미쳤어
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              미쳤어
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              미쳤어
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
              미쳤어
            </div>
          </div>
        </div>
        <div className="fixed py-2 bg-white bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0 items-center">
              <button className="flex items-center bg-orange-500 rounded-full px-3 py-1 text-sm text-white hover:bg-orange-600 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Stream;
