import React from 'react';
import { Helmet } from 'react-helmet';
import { services } from '../../data/data';

function ServiceSection() {
	return (
		<section className='services-section pt-120 rpt-100 pb-90 rpb-70'>
			<Helmet>
				<title>Services - Digiton Solutions</title>
				<meta name='description' content='Services - Digiton Solutions' />
			</Helmet>
			<div className='container'>
				<div className='row'>
					{services.home.services.map((service) => (
						<div key={service.slug} className='col-xl-3 col-sm-6'>
							<div className='service-box wow fadeInUp delay-0-2s'>
								<div className='service-normal'>
									<div className='icon'>
										<i className={service.icon}></i>
									</div>
									<h6>{service.title}</h6>
									<p>{service.description}</p>
									<a className='btn-circle' href={`/services/${service.slug}`}>
										<i className='fas fa-long-arrow-alt-right'></i>
									</a>
								</div>
								<div className='service-hover bg-black text-white'>
									<h3>{service.tagline}</h3>
									<a href={`/services/${service.slug}`} className='theme-btn'>
										{services.home.cta}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ServiceSection;
