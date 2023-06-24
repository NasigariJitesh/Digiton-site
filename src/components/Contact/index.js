import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { contactInfo } from '../../data/data';
import BacktoTopCom from '../helpers/BackToTopCom';
import Layouts from '../helpers/Layouts';

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const myForm = document.getElementById('comment-form');
		const formData = new FormData(myForm);
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => navigate('/success'))
			// eslint-disable-next-line no-alert
			.catch((error) => alert(error));
	};

	return (
		<Layouts
			pageTitle='Contact us'
			breadcrumbs={[
				{ name: 'home', path: '/' },
				{ name: 'contact', path: '/contact' },
			]}>
			<Helmet>
				<title>Contact us - Digiton Solutions</title>
				<meta name='description' content='Contact us - Digiton Solutions' />
			</Helmet>
			<section className='contact-page py-120 rpy-100'>
				<div className='container'>
					<div className='contact-info-area mb-80'>
						<div className='contact-info-item wow fadeInUp delay-0-2s'>
							<i className='far fa-map'></i>
							<p>{contactInfo.address}</p>
						</div>
						<div className='contact-info-item wow fadeInUp delay-0-4s'>
							<i className='far fa-envelope'></i>
							<p>
								<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
								<br />
								<a href={contactInfo.website}>{contactInfo.website}</a>
							</p>
						</div>
						<div className='contact-info-item wow fadeInUp delay-0-6s'>
							<i className='fas fa-phone-alt'></i>
							<p>
								<a href={`callto:${contactInfo.phone}`}>{contactInfo.phone}</a>
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-4'>
							<div className='contact-form-left bgs-cover h-100 wow fadeInLeft delay-0-2s'>
								<h2>Leave A Message</h2>
							</div>
						</div>
						<div className='col-lg-8'>
							<div className='contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s'>
								<h3 className='comment-title mb-35'>Send A Message</h3>

								<form
									id='comment-form'
									className='comment-form mt-35'
									name='contact-form'
									onSubmit={submitHandler}
									method='post'>
									<input type='hidden' name='form-name' value='contact-form' />
									<div className='row clearfix justify-content-center'>
										<div className='col-sm-6'>
											<div className='form-group'>
												<label htmlFor='full-name'>
													<i className='far fa-user'></i>
												</label>
												<input
													type='text'
													id='full-name'
													name='full-name'
													className='form-control'
													placeholder='Your Full Name'
													required
												/>
											</div>
										</div>
										<div className='col-sm-6'>
											<div className='form-group'>
												<label htmlFor='email'>
													<i className='far fa-envelope'></i>
												</label>
												<input
													type='email'
													id='email'
													name='email'
													className='form-control'
													placeholder='Your Email'
													required
												/>
											</div>
										</div>
										<div className='col-sm-12'>
											<div className='form-group'>
												<label htmlFor='comments'>
													<i className='fas fa-pencil-alt'></i>
												</label>
												<textarea
													name='message'
													id='comments'
													className='form-control'
													rows='4'
													placeholder='Write Message'
													required></textarea>
											</div>
										</div>
										<div className='col-sm-12'>
											<div className='form-group mb-0'>
												<button type='submit' className='theme-btn'>
													Send Message
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='contact-page-map'>
				<div className='our-location'>
					<iframe
						title='map'
						src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.310448245339!2d78.48666707924825!3d17.396882940926925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzQ4LjgiTiA3OMKwMjknMjkuNSJF!5e0!3m2!1sen!2sin!4v1687616909310!5m2!1sen!2sin'
						height='650'
						style={{ border: '0', width: '100%' }}
						allowFullScreen=''
						loading='lazy'></iframe>
				</div>
			</div>
			<BacktoTopCom />
		</Layouts>
	);
}
