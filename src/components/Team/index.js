import React from 'react';
import OurTeamSection from '../Home/OurTeamSection';
import TeamLayout from './TeamLayout';

export default function Team() {
	return (
		<TeamLayout
			pageTitle='Team'
			breadcrumbs={[
				{ name: 'Home', path: '/' },
				{ name: 'team', path: 'team' },
			]}>
			<OurTeamSection className='team-page-three pb-240 pt-100' />
		</TeamLayout>
	);
}
