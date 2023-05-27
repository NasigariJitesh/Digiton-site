/* eslint-disable no-nested-ternary */
import React from 'react';
import { about } from '../../data/data';

export default function MainSection() {
	return (
		<section className='about-section-six py-120 rpb-10'>
			<div className='container'>
				{about.sections.map((section, index) =>
					window.innerWidth > 576 ? (
						index % 2 === 0 ? (
							<div className='row align-items-center py-40'>
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
										<img src={section.image} alt='About' />
									</div>
								</div>
							</div>
						) : (
							<div className='row align-items-center py-40'>
								<div className='col-md-4'>
									<div className='about-shape mr-50 lmr-0 pr-30 wow fadeInLeft delay-0-2s'>
										<img src={section.image} alt='About' />
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
						<div className='row align-items-center py-40'>
							<div className='col-md-4'>
								<div className='about-shape mr-50 lmr-0 pr-30 wow fadeInLeft delay-0-2s'>
									<img src={section.image} alt='About' />
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
				)}
			</div>
		</section>
	);
}
