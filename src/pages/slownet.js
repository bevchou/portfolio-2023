import { useRouter } from "next/router";
import { useEffect } from "react";
useRouter;

const Slownet = () => {
  const router = useRouter();

    // redirect to page
  useEffect(() => {
    setTimeout(() => {
      router.push("https://slownet.work/");
    }, 1000);
  }, []);

  return (
    <div className="notFound">
      <div>redirecting...</div>
    </div>
  );
};

export default Slownet;
