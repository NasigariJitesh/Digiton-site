import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import BLOGS from '../../../posts.json';

export default function MainSection() {
	const { slug } = useParams();

	const blog = BLOGS.filter((b) => b.slug === slug)[0];

	const currentIndex = BLOGS.indexOf(blog);

	return (
		<section className='blog-details-area bg-lighter'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<div className='blog-details-content pt-120 rpt-100 pb-95 rpb-75 pr-15 rpr-0'>
							<div className='image wow fadeInUp delay-0-2s'>
								<img src={blog.thumbnail} alt='Blog Standard' />
							</div>
							<div className='blog-header'>
								<ul className='post-meta-item mr-15'>
									<li>
										<i className='far fa-user'></i>
										{blog.author}
									</li>
									<li>
										<i className='fas fa-calendar-alt'></i>
										<a href='#'>{blog.date}</a>
									</li>
								</ul>
							</div>
							<h3>{blog.title}</h3>
							<ReactMarkdown>{blog.content}</ReactMarkdown>

							<div className='row wow fadeInUp delay-0-2s'>
								<div className='col-sm-6'>
									{currentIndex > 0 ? (
										<a
											href={`/blog/${BLOGS[currentIndex - 1].slug}`}
											className='next-prev-blog'>
											<h4>{BLOGS[currentIndex - 1].title}</h4>
										</a>
									) : null}
								</div>
								<div className='col-sm-6'>
									{currentIndex < BLOGS.length - 1 ? (
										<a
											href={`/blog/${BLOGS[currentIndex + 1].slug}`}
											className='next-prev-blog'>
											<h4>{BLOGS[currentIndex + 1].title}</h4>
										</a>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
