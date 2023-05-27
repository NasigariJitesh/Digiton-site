import React, { useEffect } from 'react';
import Layouts from '../helpers/Layouts/index';
import MainSection from './MainSection';

export default function PortfolioThree() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
