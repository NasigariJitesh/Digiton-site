import React from 'react';
import Layouts from '../../helpers/Layouts';
import MainSection from './MainSection';

export default function TeamSingle() {
	return (
		<Layouts
			pageTitle='Team Single'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'team', path: '/team' },
				{ name: 'team Single', path: '/team/team-profile' },
			]}>
			<MainSection />
		</Layouts>
	);
}
