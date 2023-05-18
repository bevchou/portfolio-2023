import { useRouter } from "next/router";
import { useEffect } from "react";
useRouter;

const ITP = () => {
  const router = useRouter();

  // redirect to page
  useEffect(() => {
    setTimeout(() => {
      router.push("https://itp.beverlychou.com/");
    }, 1000);
  }, []);

  return (
    <div className="notFound">
      <div>redirecting...</div>
    </div>
  );
};

export default ITP;
