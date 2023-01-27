import React from "react";
import Layouts from "../helpers/Layouts";
import CounterStyleFour from "./CounterStyleFour";
import CounterStyleOne from "./CounterStyleOne";
import CounterStyleThree from "./CounterStyleThree";
import CounterStyleTwo from "./CounterStyleTwo";

export default function CounterPage() {
  return (
    <Layouts
      pageTitle="Counter Page"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Counter Page", path: "/counters" },
      ]}
    >
      <CounterStyleOne />
      <CounterStyleTwo />
      <CounterStyleThree />
      <CounterStyleFour />
    </Layouts>
  );
}
