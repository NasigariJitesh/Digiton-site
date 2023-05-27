import React, { useEffect } from 'react';
import logo2 from '../../../../assets/images/logos/logo-two.png';
import logo from '../../../../assets/images/logos/logo.png';
import useToggle from '../../../../hooks/useToggle';
import StickyMenu from '../../../../lib/StickyMenu';
import Navigation from '../../../helpers/Navigation';
import MobileHeaderCom from '../../Mobile';

export default function HeaderHomeFour() {
	const [searchBox, setValue] = useToggle(false);
	useEffect(() => {
		StickyMenu('.main-header');
	});
	return (
		<>
			<MobileHeaderCom logo={logo2} />
			<header className='main-header header-four'>
				{/* <div className="header-top-wrap bg-lighter py-10">
          <div className="container">
            <div className="header-top">
              <div className="top-left">
                <ul>
                  <li>
                    Call Us: <a href="callto:548978478">548978478</a>
                  </li>
                  <li>
                    Email us:
                    <a href="mailto:demo@example.com">demo@example.com</a>
                  </li>
                  <li>Our address: 45 Dream street Austria</li>
                </ul>
              </div>
              <div className="top-right">
                <div className="office-time">
                  <i className="far fa-clock"></i>
                  <span>08:00 am - 06:00 pm</span>
                </div>
                <div className="social-style-one">
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
				<div className='header-upper text-white'>
					<div className='container clearfix'>
						<div className='header-inner d-flex align-items-center'>
							<div className='logo-outer'>
								<div className='logo'>
									<a href='/'>
										<img src={logo} alt='Logo' title='Logo' />
									</a>
								</div>
							</div>

							<div className='nav-outer clearfix d-flex align-items-center'>
								<div className='main-menu navbar-expand-lg mx-lg-auto'>
									<Navigation />
								</div>
								<div className='nav-search mx-25'>
									<button
										type='button'
										className='fa fa-search'
										onClick={() => setValue.toggle()}></button>
									<form action='#' className={searchBox ? '' : 'hide'}>
										<input
											type='text'
											placeholder='Search'
											className='searchbox'
											required=''
										/>
										<button
											type='submit'
											className='searchbutton fa fa-search'></button>
									</form>
								</div>
								<div className='menu-btn'>
									<a href='/contact' className='theme-btn'>
										meet with us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
