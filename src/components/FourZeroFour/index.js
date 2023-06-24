import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import successImage from '../../assets/images/success.svg';

export default function FourZeroFour() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const navigate = useNavigate();
	return (
		<section className='error-page text-center py-120 rpy-100'>
			<div className='container'>
				<div className='error-content'>
					<img src={successImage} alt='success' />
					<h2>Thankyou! We received your Submission</h2>
					<a
						href='#'
						onClick={(e) => {
							e.preventDefault();
							navigate(-1);
						}}
						className='theme-btn mt-30'>
						Go back
					</a>
				</div>
			</div>
		</section>
	);
}
