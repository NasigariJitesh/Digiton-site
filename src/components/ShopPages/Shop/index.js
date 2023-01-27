import React from "react";
import { products } from "../../../data/products.json";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function Shop() {
  return (
    <Layouts
      pageTitle="Shop"
      breadcrumbs={[
        { name: "home", path: "/" },
        { name: "shop", path: "/shop" },
      ]}
    >
      <MainSection products={products} />
    </Layouts>
  );
}
