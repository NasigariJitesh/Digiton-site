import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../../data/data';

export default function MainSection() {
	const { slug } = useParams();

	const details = services[slug];

	return (
		<section className='service-details pt-120 rpt-100 pb-100 rpb-80'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4'>
						<div className='service-sidebar rmb-55 wow fadeInLeft delay-0-2s'>
							<div className='widget widget-services'>
								<ul>
									{services.home.services.map((service) => (
										<li
											className={slug === service.slug ? 'active' : ''}
											key={service.slug}>
											<a href={`/services/${service.slug}`}>{service.title}</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-8'>
						<div className='service-details-content wow fadeInRight delay-0-2s'>
							<div className='image mb-40'>
								<img src={details.image} alt='Service Details' />
							</div>
							<h2>{details.title}</h2>
							<p>{details.description}</p>
							<ul className='list-style-c pt-15 pb-30'>
								{details.sections.map((section, index) => (
									<li key={index}>
										<div className='col-sm-12'>
											<h4>{section.heading}</h4>
											<p>{section.description}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
