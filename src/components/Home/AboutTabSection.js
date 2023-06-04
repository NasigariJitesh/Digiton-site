import React, { useState } from 'react';
import background from '../../assets/images/counter/counter-bg.png';
import { home } from '../../data/data';
import CounterUp from '../helpers/CounterUp';
import DataIteration from '../helpers/DataIteration';

export default function AboutTabSection() {
	const [tab, setTab] = useState(home.aboutTab.content[0].id);
	const tabHandler = (e, value) => {
		e.preventDefault();
		setTab(value);
	};
	return (
		<section
			id='about-tab-section'
			className='about-tab-section bg-yellow text-black pb-120 rpb-100'>
			<div className='container'>
				<div
					className='fact-counter-inner br-5 px-25 pt-80 pb-30 text-black text-center'
					style={{ backgroundImage: `url(${background})` }}>
					<div className='row'>
						<div className='col-lg-3 col-sm-6'>
							<div className='success-item wow fadeInUp delay-0-2s'>
								<span className='count-text'>
									<CounterUp endValue='520' sectionSelect='about-tab-section' />
								</span>
								<p>Projects Done</p>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='success-item wow fadeInUp delay-0-4s'>
								<span
									className='count-text plus'
									data-speed='5000'
									data-stop='24'>
									<CounterUp endValue={24} sectionSelect='about-tab-section' />
								</span>
								<p>Awards Won</p>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='success-item wow fadeInUp delay-0-6s'>
								<span
									className='count-text plus'
									data-speed='5000'
									data-stop='12'>
									<CounterUp endValue={12} sectionSelect='about-tab-section' />
								</span>
								<p>Years Experience</p>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='success-item wow fadeInUp delay-0-8s'>
								<span
									className='count-text plus'
									data-speed='5000'
									data-stop='352'>
									<CounterUp endValue={352} sectionSelect='about-tab-section' />
								</span>
								<p>Happy Clients</p>
							</div>
						</div>
					</div>
				</div>
				<div className='section-title text-center mb-55'>
					<pre>
						<h2>{home.aboutTab.title}</h2>
					</pre>
				</div>
				<ul className='nav about-tab'>
					<DataIteration
						datas={home.aboutTab.content}
						startLength={0}
						endLength={4}>
						{({ datas }) => (
							<li key={datas.id + datas.uniqKey}>
								<a
									className={tab === datas.id ? 'active' : ''}
									data-toggle='tab'
									onClick={(e) => tabHandler(e, datas.id)}>
									<i className={datas.icon}></i>
									<h3>{datas.name}</h3>
								</a>
							</li>
						)}
					</DataIteration>
				</ul>
				<div className='tab-content about-tab-content'>
					<DataIteration
						datas={home.aboutTab.content}
						startLength={0}
						endLength={4}>
						{({ datas }) => (
							<div
								key={datas.id + datas.uniqKey}
								className={`tab-pane fade ${
									tab === datas.id ? 'show active' : ''
								}`}
								id='tabContent1'>
								<div className='row align-items-center'>
									<div className='col-lg-6'>
										<div className='about-image-shape rmb-70 wow fadeInLeft delay-0-2s'>
											<img src={datas.thumb} alt='About' />
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='about-content pr-70 rpr-0 wow fadeInRight delay-0-2s'>
											<div className='section-title mb-35'>
												<h2>{datas.heading}</h2>
											</div>
											<p>{datas.description}</p>
											<ul className='list-style-a mt-15'>
												{datas.list.map((item) => (
													<li>{item}</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						)}
					</DataIteration>
				</div>
			</div>
		</section>
	);
}
