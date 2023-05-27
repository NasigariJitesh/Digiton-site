import React from 'react';
import { home } from '../../data/data';

export default function WhatCanDo() {
	return (
		<section className='what-we-do bg-lighter pt-115 rpt-95 pb-90 rpb-70'>
			<div className='container'>
				<div className='section-title text-center mb-65'>
					<span className='sub-title'>{home.whatWeDo.title}</span>

					<pre>
						<h2>{home.whatWeDo.description}</h2>
					</pre>
				</div>
				<div className='row justify-content-center'>
					{home.whatWeDo.contents.map((content, index) => (
						<div key={index} className='col-xl-4 col-md-6'>
							<div className='feature-item wow fadeInUp delay-0-2s'>
								<a href={content.link} className='feature-btn'>
									<i className='fas fa-long-arrow-alt-right'></i>
								</a>
								<div className='icon'>
									<i className={content.iconName} />
								</div>
								<div className='feature-content'>
									<h5>{content.title}</h5>
									<p>{content.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
