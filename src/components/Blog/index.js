import React from 'react';
import BacktoTopCom from '../helpers/BackToTopCom';
import Layouts from '../helpers/Layouts/index';
import MainSection from './MainSection';

export default function Blog() {
	return (
		<Layouts
			pageTitle='Blog'
			breadcrumbs={[
				{ name: 'home', path: '/' },
				{ name: 'blog', path: '/blog' },
			]}>
			<MainSection />
			<BacktoTopCom />
		</Layouts>
	);
}
