import React, { useEffect } from 'react';
import ServiceSection from '../common/ServiceSection';
import ServicesLayout from './ServicesLayout';

export default function ServiceTwo() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<ServicesLayout
			pageTitle='Services'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'services', path: '/services' },
			]}>
			<ServiceSection />
		</ServicesLayout>
	);
}
