import { useRouter } from "next/router";
import { useEffect } from "react";
useRouter;

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="notFound">
      <div>this page doesn't exist</div>
      <div>redirecting in 3 seconds</div>
    </div>
  );
};

export default NotFoundPage;
