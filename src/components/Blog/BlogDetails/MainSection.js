import React from 'react';

export default function MainSection() {
	return (
		<section className='blog-details-area bg-lighter'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<div className='blog-details-content pt-120 rpt-100 pb-95 rpb-75 pr-15 rpr-0'>
							<div className='image wow fadeInUp delay-0-2s'>
								<img
									src={require(`../../../assets/images/news/blog-standard-1.jpg`)}
									alt='Blog Standard'
								/>
							</div>
							<div className='blog-header'>
								<ul className='post-meta-item mr-15'>
									<li>
										<i className='far fa-user'></i>
										Daniele Custer
									</li>
									<li>
										<i className='fas fa-calendar-alt'></i>
										<a href='#'>25 Jan 2022</a>
									</li>
								</ul>
								<div className='social-style-a'>
									<span>Share Now</span>
									<a href='http://facebook.com'>
										<i className='fab fa-facebook-f'></i>
									</a>
									<a href='http://twitter.com'>
										<i className='fab fa-twitter'></i>
									</a>
									<a href='https://google.com/'>
										<i className='fab fa-google-plus-g'></i>
									</a>
								</div>
							</div>
							<h3>
								Monthly Web Development Update Complexity Over HTTPS, And Push
								Notifications
							</h3>
							<p>
								But we ipsum dolor sit amet, consectetur adipisicing elit sed
								eiusmod tempor incididunt labore
							</p>
							<p>
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor reprehendermust explain to you
								how all this mistaken idea of denouncing pleasure and praising
								pain was born and I will give you a complete account of the
								system, and expound the actual teachings of the great explorer
								of the truth, the master-builder of human happiness. No one
								rejects, dislikes, or avoids pleasure itself, because it is
								pleasure, but because those who do not know how to pursue
								pleasure rationally encounter consequences that are extremely
								painful. Nor again is there anyone
							</p>
							<blockquote>
								Avoids pleasure itself, because it is pleasure, but because
								those who do not know how to pursue pleasure rationally
								encounter con sequences that are extremely painful again anyone
								<span className='author'>Tony R. Francois</span>
							</blockquote>
							<div className='blog-footer mb-40'>
								<div className='popular-tags mb-15'>
									<b>Popular Tag :</b> <a href='#'>IT Services</a>{' '}
									<a href='#'>Technology</a> <a href='#'>Services</a>
								</div>
								<div className='social-style-b'>
									<span>Share</span>
									<a href='http://facebook.com'>
										<i className='fab fa-facebook-f'></i>
									</a>
									<a href='http://twitter.com'>
										<i className='fab fa-twitter'></i>
									</a>
									<a href='https://google.com/'>
										<i className='fab fa-google-plus-g'></i>
									</a>
									<a href='https://www.instagram.com/'>
										<i className='fab fa-instagram'></i>
									</a>
								</div>
							</div>
							<div className='row wow fadeInUp delay-0-2s'>
								<div className='col-sm-6'>
									<a href='/blog/blog-details' className='next-prev-blog'>
										<h4>Building Pub Sub Service Using Node And Redis</h4>
									</a>
								</div>
								<div className='col-sm-6'>
									<a href='/blog/blog-details' className='next-prev-blog'>
										<h4>Once Upon Time Use Story For Better Engagement</h4>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-sm-9'>
						<div className='blog-sidebar mt-120 rmy-100'>
							<div className='widget widget-call-action wow fadeInUp delay-0-2s'>
								<div className='call-action-widget'>
									<h2>Work Together</h2>
									<p>
										Bur wemust ipsum dolor sit amet consectetur adipisicing elit
										sed eiusmod tempor incididunt ut labore
									</p>
									<a className='theme-btn style-b btn-circle' href='/contact'>
										Contact Now <i className='fas fa-angle-double-right'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
