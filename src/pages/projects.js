import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
useRouter;

const Projects = () => {
  const router = useRouter();

  // redirect to page
  useEffect(() => {
    router.push(
      "https://www.figma.com/proto/X04mT1FYBWJKk4hBw48ma3/Bev---Focus-Portfolio-Share-2024?page-id=113%3A16&node-id=113-17&node-type=canvas&viewport=589%2C221%2C0.1&t=hOUJW6RlKuarVSfs-1&scaling=contain&content-scaling=fixed"
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
