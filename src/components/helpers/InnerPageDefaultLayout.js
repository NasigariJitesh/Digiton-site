import React from 'react';
import GetInTouchSection from '../common/GetInTouchSection';
import TestimonialSection from '../common/TestimonialSection';
import BacktoTopCom from './BackToTopCom';
import Layouts from './Layouts';

export default function InnerPageDefaultLayout({
	children,
	pageTitle,
	breadcrumbs = [],
}) {
	return (
		<Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
			{children && children}
			<TestimonialSection />
			<GetInTouchSection />
			<BacktoTopCom />
		</Layouts>
	);
}
