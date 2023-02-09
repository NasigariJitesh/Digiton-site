import React from 'react';
import ServiceSection from '../common/ServiceSection';
import ServicesLayout from './ServicesLayout';

export default function ServiceTwo() {
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
