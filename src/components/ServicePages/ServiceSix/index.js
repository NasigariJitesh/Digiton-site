import React from "react";
import ServicesLayout from "../ServicesLayout";
import MainSection from "./MainSection";

export default function ServiceSix() {
  return (
    <ServicesLayout
      pageTitle="Service Six"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Service Six", path: "/service-six" },
      ]}
    >
      <MainSection />
    </ServicesLayout>
  );
}
