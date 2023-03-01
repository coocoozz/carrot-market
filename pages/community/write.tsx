import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

function Write() {
  return (
    <Layout canGoBack title="Write Post">
      <form className="px-4 space-y-4">
        <TextArea placeholder="Ask a question!" required />
        <Button text="Submit" />
      </form>
    </Layout>
  );
}

export default Write;
