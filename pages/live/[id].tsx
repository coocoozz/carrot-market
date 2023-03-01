import Layout from "../../components/layout";
import Message from "../../components/message";

function Stream() {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4">
        <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-2xl block mt-3 text-gray-900">$140</span>
          <p className="my-5 test-gray-700 text-sm">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
          <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ￦20,000" reversed />
            <Message message="미쳤어" />
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
      </div>
    </Layout>
  );
}

export default Stream;
