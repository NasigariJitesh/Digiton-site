import React from 'react';
import BacktoTopCom from '../helpers/BackToTopCom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import AboutSection from './AboutSection';
import AboutTabSection from './AboutTabSection';
import GallerySection from './GallerySection';
import Hero from './Hero';
import OurTeamSection from './OurTeamSection';
import RecentArticle from './RecentArticle';
import WhatCanDo from './WhatCanDo';
import WorkProgressSection from './WorkProgressSection';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<WhatCanDo />
			<AboutSection />
			<AboutTabSection />
			<GallerySection />
			<OurTeamSection />
			<WorkProgressSection />
			<RecentArticle />

			<Footer />

			<BacktoTopCom />
		</>
	);
}
