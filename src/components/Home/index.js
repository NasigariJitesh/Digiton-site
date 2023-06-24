import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BacktoTopCom from '../helpers/BackToTopCom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import AboutSection from './AboutSection';
import AboutTabSection from './AboutTabSection';
import Hero from './Hero';
import RecentArticle from './RecentArticle';
import WhatCanDo from './WhatCanDo';

export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Digiton Solutions</title>
				<meta name='description' content='Digiton Solutions' />
			</Helmet>
			<Header />
			<Hero />
			<WhatCanDo />
			<AboutSection />
			<AboutTabSection />
			<RecentArticle />

			<Footer />

			<BacktoTopCom />
		</>
	);
}
