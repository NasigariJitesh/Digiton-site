import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layouts from '../../helpers/Layouts';
import MainSection from './MainSection';

export default function ServiceDetails() {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layouts
			pageTitle='Service Details'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'Service', path: '/services' },
				{ name: slug, path: `/services/${slug}` },
			]}>
			<MainSection />
		</Layouts>
	);
}
