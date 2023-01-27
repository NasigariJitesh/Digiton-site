import React from "react";
import OurTeamSection from "../../HomeFour/OurTeamSection";
import TeamLayout from "../TeamLayout";

export default function TeamThree() {
  return (
    <TeamLayout
      pageTitle="Team Three"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "team", path: "team-three" },
      ]}
    >
      <OurTeamSection className="team-page-three pb-240 pt-100" />
    </TeamLayout>
  );
}
