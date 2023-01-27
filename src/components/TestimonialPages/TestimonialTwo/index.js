import React from "react";
import TestimonialSection from "../../HomeFive/TestimonialSection";
import TestimonialLayout from "../TestimonialLayout";

export default function TestimonialTwo() {
  return (
    <TestimonialLayout
      pageTitle="Testimonial Two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Testimonial", path: "/testimonial-two" },
      ]}
    >
      <TestimonialSection />
    </TestimonialLayout>
  );
}
