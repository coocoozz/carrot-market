import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error, isLoading } = useSWR("/api/users/me");
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && data && !data.ok) {
      console.log("go to enter");
      router.replace("/enter");
    }
  }, [router, data, isLoading]);
  return { user: data?.profile, isLoading: !data && !error };
}
