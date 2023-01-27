import React from "react";
import { datas } from "../../../data/PortFolioIsotop.json";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function PortfolioTwo() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Layouts
        pageTitle="Portfolio Two"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "protfolio two", path: "/portfolio-two" },
        ]}
      >
        <MainSection sectionDatas={datas} />
      </Layouts>
    </div>
  );
}
