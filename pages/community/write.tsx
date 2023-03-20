import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { FieldErrors, useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Post } from "@prisma/client";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

function Write() {
  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
  const { register, handleSubmit } = useForm<WriteForm>();
  const onValid = (data: WriteForm) => {
    if (loading) {
      return;
    }
    post(data);
  };
  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };
  const router = useRouter();
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Write Post">
      <form
        className="px-4 space-y-4"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <TextArea
          placeholder="Ask a question!"
          register={register("question", { required: true, minLength: 5 })}
        />
        <Button text={loading ? "Submitting..." : "Submit"} />
      </form>
    </Layout>
  );
}

export default Write;
