import React from 'react';
import GetInTouchSection from '../common/GetInTouchSection';
import WorkProcessSection from '../common/WorkProcessSection';
import BacktoTopCom from '../helpers/BackToTopCom';
import Layouts from '../helpers/Layouts';

export default function ServicesLayout({ children, pageTitle, breadcrumbs }) {
	return (
		<Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
			{children && children}
			<WorkProcessSection />
			<GetInTouchSection />
			<BacktoTopCom />
		</Layouts>
	);
}
