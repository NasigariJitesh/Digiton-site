/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import BLOGS from '../../posts.json';

export default function MainSection() {
	const totalPages = Math.ceil(BLOGS.length / 3);
	const [page, setPage] = useState(1);
	const currentPageBlogs = BLOGS.slice((page - 1) * 3, page * 3);

	return (
		<section className='z-1 blog-page-area bg-lighter'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<div className='blog-standard-content pt-120 rpt-100 pb-110 rpb-90 pr-15 rpr-0'>
							{currentPageBlogs.map((blog) => (
								<div className='blog-standard-item wow fadeInUp delay-0-2s'>
									<div className='image'>
										<img
											src={require(`../../assets/images/news/blog-standard-1.jpg`)}
											alt='Blog Standard'
										/>
									</div>
									<div className='blog-header'>
										<ul className='post-meta-item mr-15'>
											<li>
												<i className='far fa-user'></i>
												{blog.author}
											</li>
											<li>
												<i className='fas fa-calendar-alt'></i>
												{blog.date}
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
										<a href='/blog/blog-details'>{blog.title}</a>
									</h3>
									<ReactMarkdown skipHtml>{blog.content}</ReactMarkdown>

									<a href='/blog/blog-details' className='theme-btn'>
										Read More
									</a>
								</div>
							))}

							<div className='blog-standard-item quote-blog wow fadeInUp delay-0-2s'>
								<h3>
									{/* <a href='/blog/blog-details'> */}
									Meet Smashing Book New Frontiers In Web For Better Enge Tools
									Techniques.
									{/* </a> */}
								</h3>
							</div>

							<ul className='pagination flex-wrap'>
								<li
									className={`page-item${page === 1 ? ' disabled' : null}`}
									onClick={() => {
										if (page - 1 > 0) setPage((prev) => prev - 1);
									}}>
									<span className='page-link'>
										<i className='fas fa-chevron-left'></i>
									</span>
								</li>
								{[...Array(totalPages)].map((value, index) => (
									<li
										className={`page-item${
											page === index + 1 ? ' active' : null
										}`}
										onClick={() => setPage(index + 1)}>
										<span className='page-link'>{index + 1}</span>
										{index + 1 === page ? (
											<span className='sr-only'>current</span>
										) : null}
									</li>
								))}
								{/* <li className='page-item active'>
									<span className='page-link'>
										01
										<span className='sr-only'>(current)</span>
									</span>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										02
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										03
									</a>
								</li> */}
								<li
									className={`page-item${
										page === totalPages ? ' disabled' : null
									}`}
									onClick={() => {
										if (page + 1 <= totalPages) setPage((prev) => prev + 1);
									}}>
									<a className='page-link' href='#'>
										<i className='fas fa-chevron-right'></i>
									</a>
								</li>
							</ul>
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
