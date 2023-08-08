import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
useRouter;

const Projects = () => {
  const router = useRouter();

  // redirect to page
  useEffect(() => {
    router.push(
      "https://www.figma.com/proto/Dq4yhm5HeqeUb0hOItR4xd/Bev---Focus-Portfolio-Share?page-id=113%3A16&type=design&node-id=113-17&viewport=281%2C89%2C0.19&t=8wjxzL1tR5BRcfe4-1&scaling=contain&mode=design"
    );
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <div className="notFound">
        <div>redirecting...</div>
      </div>
    </>
  );
};

export default Projects;
