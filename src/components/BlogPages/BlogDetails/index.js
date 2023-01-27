import React from "react";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function BlogDetails() {
  return (
    <>
      <Layouts
        pageTitle="blog details"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "blog", path: "/blog" },
          { name: "blog details", path: "/blog/blog-details" },
        ]}
      >
        <MainSection />
      </Layouts>
    </>
  );
}
