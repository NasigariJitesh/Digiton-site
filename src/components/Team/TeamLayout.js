import React from 'react';
import WorkProcessSection from '../common/WorkProcessSection';
import InnerPageDefaultLayout from '../helpers/InnerPageDefaultLayout';

export default function TeamLayout({ children, pageTitle, breadcrumbs }) {
	return (
		<InnerPageDefaultLayout pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
			{children && children}
			<WorkProcessSection />
		</InnerPageDefaultLayout>
	);
}
