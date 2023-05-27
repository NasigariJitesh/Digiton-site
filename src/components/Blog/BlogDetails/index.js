import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layouts from '../../helpers/Layouts';
import MainSection from './MainSection';

export default function BlogDetails() {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layouts
			pageTitle='Blog Details'
			breadcrumbs={[
				{ name: 'home', path: '/' },
				{ name: 'blog', path: '/blog' },
				{ name: slug, path: `/blog/${slug}` },
			]}>
			<MainSection />
		</Layouts>
	);
}
