import React, { useEffect } from 'react';
import logo2 from '../../../assets/images/logos/logo-two.png';
import logo from '../../../assets/images/logos/logo.png';
import StickyMenu from '../../../lib/StickyMenu';
import Navigation from '../../helpers/Navigation';
import MobileHeader from '../Mobile';

export default function Header() {
	useEffect(() => {
		StickyMenu('.main-header');
	});
	return (
		<>
			<MobileHeader logo={logo2} />
			<header className='main-header header-style'>
				<div className='header-upper text-white'>
					<div className='container clearfix'>
						<div className='header-inner d-flex align-items-center'>
							<div className='logo-outer'>
								<div className='logo'>
									<a href='/'>
										<img src={logo} alt='Logo' title='Logo' height={70} />
									</a>
								</div>
							</div>

							<div className='nav-outer clearfix d-flex align-items-center'>
								<div className='main-menu navbar-expand-lg mx-lg-auto'>
									<Navigation />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
