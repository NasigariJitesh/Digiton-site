import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { blogImages, home } from '../../data/data';
import { truncate } from '../../data/functions';
import BLOGS from '../../posts.json';

export default function RecentArticle() {
	return (
		<section className='news-section pt-90 pb-90 rpb-70'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='d-flex flex-column col-xl-4 col-md-6'>
						<div className='d-flex flex-column flex-grow-1 justify-content-between news-section-content mb-55 wow fadeInUp delay-0-2s'>
							<div>
								<div className='section-title mb-25'>
									<span className='sub-title'>{home.recentArticle.title}</span>
									<h2>{home.recentArticle.heading}</h2>
								</div>

								<div className='section-title mb-25'>
									<p>{home.recentArticle.description}</p>
								</div>
								<p>{home.recentArticle.details}</p>
							</div>
							<div>
								<a href='/blog' className='theme-btn mt-15'>
									{home.recentArticle.cta}
								</a>
							</div>
						</div>
					</div>
					<div className='d-flex flex-column col-xl-4 col-md-6'>
						<div className='d-flex justify-content-between flex-column flex-grow-1 news-item wow fadeInUp delay-0-4s'>
							<div className='d-flex flex-column flex-grow-1'>
								<div className='image'>
									<img
										src={blogImages(`.${BLOGS[0].thumbnail}`)}
										alt='recent-article-1'
									/>
								</div>
								<div className='flex-grow-1 news-content'>
									<ul className='post-meta-item'>
										<li>
											<i className='fas fa-calendar-alt'></i>
											<a href='#' rel='bookmark'>
												{BLOGS[0].date}
											</a>
										</li>
									</ul>
									<h4>
										<a href={`/blog/${BLOGS[0].slug}`}>{BLOGS[0].title}</a>
									</h4>
									<p>
										{BLOGS[0].content.length > 120 ? (
											<>
												<ReactMarkdown>
													{`${BLOGS[0].content.slice(0, 120)}...`}
												</ReactMarkdown>
												<a href={`/blog/${BLOGS[0].slug}`}>
													{home.recentArticle.readMore}
												</a>
											</>
										) : (
											<ReactMarkdown>{BLOGS[0].content}</ReactMarkdown>
										)}
									</p>
								</div>
							</div>
							<div className='news-author'>
								<span className='posted-by'>
									By <a href='#'>{BLOGS[0].author}</a>
								</span>
							</div>
						</div>
					</div>
					<div className='col-xl-4'>
						<div className='row'>
							{BLOGS[1] ? (
								<div className='col-xl-12 col-sm-6'>
									<div className='news-item style-a wow fadeInUp delay-0-6s'>
										<div className='news-content'>
											<ul className='post-meta-item'>
												<li>
													<i className='fas fa-calendar-alt'></i>
													<a href='#' rel='bookmark'>
														{BLOGS[1].date}
													</a>
												</li>
											</ul>
											<h4>
												<a href={`/blog/${BLOGS[1].slug}`}>{BLOGS[1].title}</a>
											</h4>
											<p>
												<ReactMarkdown>
													{truncate(BLOGS[1].content, 120)}
												</ReactMarkdown>
												{BLOGS[2].content.length > 120 ? (
													<a href={`/blog/${BLOGS[1].slug}`}>
														{home.recentArticle.readMore}
													</a>
												) : null}
											</p>
										</div>
									</div>
								</div>
							) : null}
							{BLOGS[2] ? (
								<div className='col-xl-12 col-sm-6'>
									<div className='news-item style-a wow fadeInUp delay-0-7s'>
										<div className='news-content'>
											<ul className='post-meta-item'>
												<li>
													<i className='fas fa-calendar-alt'></i>
													<a href='#' rel='bookmark'>
														{BLOGS[2].date}
													</a>
												</li>
											</ul>
											<h4>
												<a href={`/blog/${BLOGS[2].slug}`}>{BLOGS[2].title}</a>
											</h4>
											<p>
												<ReactMarkdown>
													{truncate(BLOGS[2].content, 120)}
												</ReactMarkdown>
												{BLOGS[2].content.length > 120 ? (
													<a href={`/blog/${BLOGS[2].slug}`}>
														{home.recentArticle.readMore}
													</a>
												) : null}
											</p>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
