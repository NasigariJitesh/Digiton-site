import React from "react";
import Layouts from "../../helpers/Layouts/index";
import MainSection from "./MainSection";

export default function Blog() {
  return (
    <Layouts
      pageTitle="Blog Standard"
      breadcrumbs={[
        { name: "home", path: "/" },
        { name: "blog", path: "/blog" },
      ]}
    >
      <MainSection />
    </Layouts>
  );
}
