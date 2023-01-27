import React from "react";
import { products } from "../../../data/products.json";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function ShopDetails() {
  return (
    <Layouts
      pageTitle="Shop Details"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "shop details", path: "/shop-detail" },
      ]}
    >
      <MainSection products={products} />
    </Layouts>
  );
}
