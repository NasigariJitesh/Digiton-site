import React from 'react';
import background from '../../../assets/images/footer/footer-bg.png';
import logo from '../../../assets/images/logos/logo-two.png';

export default function FooterHomeFour() {
	return (
		<footer
			className='main-footer footer-style bgs-cover bg-lighter'
			style={{ backgroundImage: `url(${background})` }}>
			<div className='footer-sign-up'>
				<div className='container'>
					<div className='footer-signup-inner bg-yellow pt-40 pb-25 px-60'>
						<div className='row align-items-center justify-content-between'>
							<div className='col-xl-6 col-lg-7'>
								<div className='section-title text-black mb-25 rmb-35'>
									<h2>Sign up for latest IT resources news from Restly</h2>
								</div>
							</div>
							<div className='col-lg-5'>
								<form className='sign-in-form mb-15' action='#'>
									<input type='email' placeholder='Email Address' required />
									<button className='theme-btn' type='submit'>
										Sign Up
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-sm-6'>
						<div className='footer-widget about-widget'>
							<div className='footer-logo mb-35'>
								<a href='/'>
									<img src={logo} alt='Logo' />
								</a>
							</div>
							<div className='text'>
								Sed ut perspiciatis unde omnis natus evoluptat emaccu santium
								doloremque laudantium totam rem aperiam eaquepsa
							</div>
							<div className='social-style-b mt-30'>
								<a href='http://facebook.com'>
									<i className='fab fa-facebook-f'></i>
								</a>
								<a href='http://twitter.com'>
									<i className='fab fa-twitter'></i>
								</a>
								<a href='https://www.instagram.com/'>
									<i className='fab fa-instagram'></i>
								</a>
								<a href='https://www.pinterest.com/'>
									<i className='fab fa-pinterest-p'></i>
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-sm-6'>
						<div className='footer-widget link-widget ml-20 rml-0'>
							<h4 className='footer-title'>Page Links</h4>
							<ul className='list-style-c'>
								<li>
									<a href='#'>About Us</a>
								</li>
								<li>
									<a href='#'>Letest Events</a>
								</li>
								<li>
									<a href='#'>How It Work</a>
								</li>
								<li>
									<a href='#'>News & Articles</a>
								</li>
								<li>
									<a href='#'>contact us</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-sm-6'>
						<div className='footer-widget contact-widget mr-30 rmr-0'>
							<h4 className='footer-title'>Contacts</h4>
							<ul className='list-style-b'>
								<li>
									<i className='fas fa-map-marker-alt'></i> 1791 Yorkshire
									Circle Kitty Hawk, NC 27949
								</li>
								<li>
									<i className='fas fa-clock'></i> Mon-Sat 9:00 - 7:00
								</li>
								<li>
									<i className='fas fa-phone-alt'></i>
									<a href='callto:+012-345-6789'>+012-345-6789</a>
								</li>
								<li>
									<i className='fas fa-envelope'></i>
									<a href='mailto:info@example.com'>info@example.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-sm-6'>
						<div className='footer-widget news-widget'>
							<h4 className='footer-title'>Recent News</h4>
							<div className='widget-news-wrap'>
								<div className='widget-news-item'>
									<img
										src={require(`../../../assets/images/news/footer-widget-1.jpg`)}
										alt='News'
									/>
									<div className='widget-news-content'>
										<h6>
											<a href='/blog-details'>
												Making A Strong Case For Accessibility
											</a>
										</h6>
										<span className='date'>
											<i className='far fa-calendar-alt'></i>
											<a href='/blog-details'>15 Dec 2021</a>
										</span>
									</div>
								</div>
								<div className='widget-news-item'>
									<img
										src={require(`../../../assets/images/news/footer-widget-2.jpg`)}
										alt='News'
									/>
									<div className='widget-news-content'>
										<h6>
											<a href='/blog-details'>
												An Introduction Figma Interactive Compo
											</a>
										</h6>
										<span className='date'>
											<i className='far fa-calendar-alt'></i>
											<a href='/blog-details'>15 Dec 2021</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright-area bg-black text-white mt-30'>
				<div className='container'>
					<div className='copyright-inner pt-15'>
						<div className='social-style-a mb-10'>
							<a href='http://facebook.com'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='http://twitter.com'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='https://www.instagram.com/'>
								<i className='fab fa-instagram'></i>
							</a>
							<a href='https://www.pinterest.com/'>
								<i className='fab fa-pinterest-p'></i>
							</a>
						</div>
						<p>copyright 2022 Restly All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
