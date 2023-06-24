import React from 'react';
import GetInTouchSection from '../common/GetInTouchSection';
import BacktoTopCom from '../helpers/BackToTopCom';
import Layouts from '../helpers/Layouts';

export default function ServicesLayout({ children, pageTitle, breadcrumbs }) {
	return (
		<Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
			{children && children}
			<GetInTouchSection />
			<BacktoTopCom />
		</Layouts>
	);
}
