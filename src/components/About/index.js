import React, { useEffect } from 'react';
import InnerPageDefaultLayout from '../helpers/InnerPageDefaultLayout';
import MainSection from './MainSection';

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<InnerPageDefaultLayout
			pageTitle='About Us'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'About Us', path: '/about' },
			]}>
			<MainSection />
		</InnerPageDefaultLayout>
	);
}
