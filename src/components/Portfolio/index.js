import React from 'react';
import Layouts from '../helpers/Layouts/index';
import MainSection from './MainSection';

export default function PortfolioThree() {
	return (
		<Layouts
			pageTitle='Portfolio'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'Portfolio', path: '/portfolio' },
			]}>
			<MainSection />
		</Layouts>
	);
}
