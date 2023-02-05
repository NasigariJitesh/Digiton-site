import React from 'react';
import AboutSection from '../common/AboutSection';
import GetInTouchSection from '../common/GetInTouchSection';
import WorkProcessSection from '../common/WorkProcessSection';
import BacktoTopCom from '../helpers/BackToTopCom';
import Layouts from '../helpers/Layouts';

export default function TestimonialLayout({
	children,
	pageTitle,
	breadcrumbs,
}) {
	return (
		<Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
			{children && children}
			<AboutSection className='pb-240' />
			<WorkProcessSection />
			<GetInTouchSection />
			<BacktoTopCom />
		</Layouts>
	);
}
