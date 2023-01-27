import React from "react";
import { teams } from "../../../data/Teams.json";
import TeamSection from "../../HomeThree/TeamSection";
import TeamLayout from "../TeamLayout";

export default function TeamTwo() {
  return (
    <TeamLayout
      pageTitle="Team Two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "team", path: "team-two" },
      ]}
    >
      <TeamSection
        teams={teams}
        backgroundImg="none"
        className="text-none pb-240"
      />
    </TeamLayout>
  );
}
