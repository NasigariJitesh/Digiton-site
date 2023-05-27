import React, { useEffect } from 'react';
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
