import React from 'react';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Hero from './Hero';

export default function Layouts({ children, pageTitle, breadcrumbs = [] }) {
	return (
		<>
			<Header />
			<Hero pageTitle={pageTitle} breadcrumbs={breadcrumbs} />
			{children && children}
			<Footer />
		</>
	);
}
