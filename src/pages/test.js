import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Test() {
  const router = useRouter();

  const { page } = router.query;


  return (
    <>
      {" "}
      <div
        onClick={() => {
          history.pushState({ page_id: 1 }, "", "/work");
          console.log(window.location.href);
        }}
      >
        work
      </div>
      <div onClick={() => history.pushState({ page_id: 1 }, "", "/")}>ho</div>
    </>
  );
}
