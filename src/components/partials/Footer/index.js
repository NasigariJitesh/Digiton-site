import React from 'react';
import background from '../../../assets/images/footer/footer-bg.png';
import { footer } from '../../../data/data';

import BLOGS from '../../../posts.json';

export default function FooterHomeFour() {
	const latestBlogs = BLOGS.slice(0, 2);
	return (
		<footer
			className='main-footer footer-style bgs-cover bg-lighter'
			style={{ backgroundImage: `url(${background})` }}>
			{/* <div className='footer-sign-up'>
				<div className='container'>
					<div className='footer-signup-inner bg-yellow pt-40 pb-25 px-60'>
						<div className='row align-items-center justify-content-between'>
							<div className='col-xl-6 col-lg-7'>
								<div className='section-title text-black mb-25 rmb-35'>
									<h2>{signUpForm.title}</h2>
								</div>
							</div>
							<div className='col-lg-5'>
								<form className='sign-in-form mb-15' action='#'>
									<input type='email' placeholder='Email Address' required />
									<button className='theme-btn' type='submit'>
										{signUpForm.cta}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className='container pt-60'>
				<div className='row'>
					<div className='col-lg-3 col-sm-6'>
						<div className='footer-widget about-widget'>
							<div className='footer-logo mb-35'>
								<a href='/'>
									<img src={footer.logo} alt='Logo' style={{ height: 100 }} />
								</a>
							</div>
							<div className='text'>{footer.description}</div>
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
									<a href='/about'>About Us</a>
								</li>

								<li>
									<a href='/blog'>News & Articles</a>
								</li>
								<li>
									<a href='/contact'>contact us</a>
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
								{latestBlogs.map((blog) => (
									<div key={blog.id} className='widget-news-item'>
										<img src={blog.thumbnail} alt='News' />
										<div className='widget-news-content'>
											<h6>
												<a href={`/blog/${blog.slug}`}>
													{blog.title.length > 15
														? `${blog.title.slice(0, 15)}...`
														: blog.title}
												</a>
											</h6>
											<span className='date'>
												<i className='far fa-calendar-alt'></i>
												<a href='/blog/blog-details'>{blog.date}</a>
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='copyright-area bg-lighter text-black mt-30'>
				<div className='container'>
					<div className='copyright-inner pt-15'>
						<p>copyright 2023 Digiton All Rights Reserved.</p>
					</div>
				</div>
			</div> */}
		</footer>
	);
}
