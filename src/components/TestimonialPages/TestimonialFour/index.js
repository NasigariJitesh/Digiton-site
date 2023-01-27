import React from "react";
import TestimonialSection from "../../HomeSeven/TestimonialSection";
import TestimonialLayout from "../TestimonialLayout";

export default function TestimonialFour() {
  return (
    <TestimonialLayout
      pageTitle="Testimonial Four"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Testimonial", path: "/testimonial-four" },
      ]}
    >
      <TestimonialSection />
    </TestimonialLayout>
  );
}
