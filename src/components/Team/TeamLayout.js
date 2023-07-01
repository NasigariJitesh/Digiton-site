import React from 'react';
import InnerPageDefaultLayout from '../helpers/InnerPageDefaultLayout';

export default function TeamLayout({ children, pageTitle, breadcrumbs }) {
	return (
		<InnerPageDefaultLayout pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
			{children && children}
		</InnerPageDefaultLayout>
	);
}
