import React from 'react';
import TestimonialSection from '../common/TestimonialSection1';
import TestimonialLayout from './TestimonialLayout';

export default function Testimonial() {
	return (
		<TestimonialLayout
			pageTitle='Testimonial'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'Testimonial', path: '/testimonial' },
			]}>
			<TestimonialSection />
		</TestimonialLayout>
	);
}
