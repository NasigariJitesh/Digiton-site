import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/images/404.png';

export default function FourZeroFour() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const navigate = useNavigate();
	return (
		<section className='error-page text-center py-120 rpy-100'>
			<Helmet>
				<title>Digiton Solutions</title>
				<meta name='description' content='Digiton Solutions' />
			</Helmet>
			<div className='container'>
				<div className='error-content'>
					<img src={errorImg} alt='404 Error' />
					<h2>Oops! 404 page not found.</h2>
					<a
						href='#'
						onClick={(e) => {
							e.preventDefault();
							navigate(-1);
						}}
						className='theme-btn mt-30'>
						go back
					</a>
				</div>
			</div>
		</section>
	);
}
