/* eslint-disable no-nested-ternary */
import React from 'react';
import { Helmet } from 'react-helmet';
import { team } from '../../data/data';

export default function OurTeamSection() {
	return (
		<section className='team-section-three pb-50 rpb-30'>
			<Helmet>
				<title>Team - Digiton Solutions</title>
				<meta name='description' content='Team - Digiton Solutions' />
			</Helmet>
			<div className='container'>
				{team.sections.map((section, index) =>
					window.innerWidth > 576 ? (
						index % 2 === 0 ? (
							<div key={index} className='row align-items-center py-40'>
								<div className='col-md-8'>
									<div className='about-six-content mr-65 rmr-0 wow fadeInLeft delay-0-2s'>
										<div className='section-title mb-35'>
											<h2>{section.heading}</h2>
										</div>
										<div className='service-item-six'>
											<div className='service-content'>
												<p>{section.description}</p>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='about-shape ml-50 rml-0 pr-30 wow fadeInRight delay-0-2s'>
										<img src={section.image} alt='Team' />
									</div>
								</div>
							</div>
						) : (
							<div key={index} className='row align-items-center py-40'>
								<div className='col-md-4'>
									<div className='about-shape mr-50 lmr-0 pr-30 wow fadeInLeft delay-0-2s'>
										<img src={section.image} alt='Team' />
									</div>
								</div>
								<div className='col-md-8'>
									<div className='about-six-content ml-65 rmr-0 wow fadeInRight delay-0-2s'>
										<div className='section-title mb-35'>
											<h2>{section.heading}</h2>
										</div>
										<div className='service-item-six'>
											<div className='service-content'>
												<p>{section.description}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					) : (
						<div key={index} className='row align-items-center py-40'>
							<div className='col-md-4'>
								<div className='about-shape mb-35 lmr-0 pr-30 wow fadeInLeft delay-0-2s'>
									<img src={section.image} alt='Team' />
								</div>
							</div>
							<div className='col-md-8'>
								<div className='about-six-content rmr-0 wow fadeInRight delay-0-2s'>
									<div className='section-title mb-35'>
										<h2>{section.heading}</h2>
									</div>
									<div className='service-item-six'>
										<div className='service-content'>
											<p>{section.description}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}
