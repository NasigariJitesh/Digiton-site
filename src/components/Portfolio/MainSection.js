import React from 'react';
import { Helmet } from 'react-helmet';
import { portfolio } from '../../data/data';

export default function MainSection() {
	return (
		<section className='gallery-section-a  pt-115 rpt-95 pb-85 rpb-65 px-60 rpx-0'>
			<Helmet>
				<title>Portfolio - Digiton Solutions</title>
				<meta name='description' content='Portfolio - Digiton Solutions' />
			</Helmet>
			<div className='container-fluid'>
				<div className='section-title text-center mb-55'>
					<h2>{portfolio.title}</h2>
					<p>{portfolio.description}</p>
				</div>
				<div className='row text-black justify-content-center'>
					{portfolio.items.map((item, index) => (
						<div key={index} className='col-md-6 col-xl-4'>
							<div className='gallery-item style-a wow fadeInUp delay-0-2s'>
								<img
									src={item.image}
									style={{ objectFit: 'cover' }}
									alt='Gallery'
								/>
								<div className='gallery-content'>
									<div className='gallery-content-inner'>
										<h5>{item.heading}</h5>
										<p>{item.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='section-title text-center mb-55'>
					<p>{portfolio.footnote}</p>
				</div>
			</div>
		</section>
	);
}
