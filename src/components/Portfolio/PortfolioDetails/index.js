import React, { useEffect } from 'react';
import Layouts from '../../helpers/Layouts/index';
import MainSection from './MainSection';

export default function ProtfolioDetails() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layouts
			pageTitle='Portfolio'
			breadcrumbs={[
				{ name: 'home', path: '/' },
				{ name: 'Portfolio', path: '/portfolio' },
				{ name: 'portfolio details', path: '/portfolio/portfolio-details' },
			]}>
			<MainSection />
		</Layouts>
	);
}
