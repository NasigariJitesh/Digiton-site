import React from "react";
import { teams } from "../../../data/Teams.json";
import TeamSection from "../../HomeTwo/TeamSection";
import TeamLayout from "../TeamLayout";

export default function TeamOne() {
  return (
    <TeamLayout
      pageTitle="Team One"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "team", path: "team-one" },
      ]}
    >
      <TeamSection teams={teams} className="pb-240" />
    </TeamLayout>
  );
}
