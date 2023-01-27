import React from "react";
import TestimonialSection from "../../HomeSix/TestimonialSection";
import TestimonialLayout from "../TestimonialLayout";

export default function TestimonialThree() {
  return (
    <TestimonialLayout
      pageTitle="Testimonial Three"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Testimonial", path: "/testimonial-three" },
      ]}
    >
      <TestimonialSection className="pb-0" />
    </TestimonialLayout>
  );
}
