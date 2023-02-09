import React from 'react';
import shape from '../../assets/images/hero/hero-four-shape.png';
import background from '../../assets/images/hero/hero-four.jpg';

export default function Hero() {
	return (
		<section
			className='hero-section bgs-cover overlay pt-160 rpt-140 pb-80 rpb-100'
			style={{ backgroundImage: `url(${background})` }}>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-7'>
						<div className='hero-content text-white rmb-65'>
							<span className='sub-title d-block wow fadeInUp delay-0-2s'>
								EMPOWER YOUR BUSINESS
							</span>
							<h1 className='wow fadeInUp delay-0-4s mt-20'>
								Excellent services for IT success
							</h1>
							<div className='hero-btns mt-35 wow fadeInUp delay-0-6s'>
								<a href='/contact' className='theme-btn mr-15 mb-10'>
									meet with us
								</a>
								<a href='/about' className='theme-btn style-b mb-10'>
									learn more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='hero-line-shape'>
				<img src={shape} alt='Hero line shape' />
			</div>
		</section>
	);
}
