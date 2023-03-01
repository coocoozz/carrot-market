import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className="space-y-5 px-4">
        <Input label="Name" name="name" kind="text" required />
        <Input label="Price" name="price" kind="price" required />
        <TextArea label="Description" name="description" required />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
