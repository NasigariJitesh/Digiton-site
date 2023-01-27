import React from "react";
import TestimonialSection from "../../HomeThree/TestimonialSection";
import TestimonialLayout from "../TestimonialLayout";

export default function TestimonialOne() {
  return (
    <TestimonialLayout
      pageTitle="Testimonial One"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Testimonial", path: "/testimonial-one" },
      ]}
    >
      <TestimonialSection />
    </TestimonialLayout>
  );
}
