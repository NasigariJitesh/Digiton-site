import React, { useEffect } from 'react';
import TestimonialSection from '../common/TestimonialSection1';
import TestimonialLayout from './TestimonialLayout';

export default function Testimonial() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
