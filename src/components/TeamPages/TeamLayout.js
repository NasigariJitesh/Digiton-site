import React from "react";
import InnerPageDefaultLayout from "../helpers/InnerPageDefaultLayout";
import WorkProcessSection from "../HomeThree/WorkProcessSection";

export default function TeamLayout({ children, pageTitle, breadcrumbs }) {
  return (
    <InnerPageDefaultLayout pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
      {children && children}
      <WorkProcessSection />
    </InnerPageDefaultLayout>
  );
}
