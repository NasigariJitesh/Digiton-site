import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logos/logo-two.png';
import './style.css';

function Drawer({ drawer, action }) {
	return (
		<>
			<div
				onClick={(e) => action(e)}
				className={`off_canvars_overlay ${drawer ? 'active' : ''}`}></div>
			<div className='offcanvas_menu'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-12'>
							<div
								className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
								<a
									href='/'
									className='offcanvas-brand text-center mb-40 d-block'>
									<img src={logo} alt='' />
								</a>
								<div id='menu' className='text-left '>
									<ul className='offcanvas_main_menu'>
										<li>
											<Link to='/'>Home</Link>
										</li>
										<li>
											<Link to='/about'>About</Link>
										</li>
										<li>
											<Link to='/services'>Services</Link>
										</li>
										<li>
											<Link to='/portfolio'>Portfolio</Link>
										</li>
										<li>
											<Link to='/team'>Team</Link>
										</li>

										<li>
											<Link to='/blog'>Blog</Link>
										</li>
										<li>
											<Link to='/contact'>Contact</Link>
										</li>
									</ul>
								</div>
								<div className='offcanvas-social'>
									<ul className='text-center'>
										<li>
											<a href='$'>
												<i className='fab fa-facebook-f'></i>
											</a>
										</li>
										<li>
											<a href='$'>
												<i className='fab fa-twitter'></i>
											</a>
										</li>
										<li>
											<a href='$'>
												<i className='fab fa-instagram'></i>
											</a>
										</li>
										<li>
											<a href='$'>
												<i className='fab fa-dribbble'></i>
											</a>
										</li>
									</ul>
								</div>
								<div className='footer-widget-info'>
									<ul>
										<li>
											<a href='#'>
												<i className='fa fa-envelope'></i> support@restly.com
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fa fa-phone'></i> +(642) 342 762 44
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fa fa-map-marker-alt'></i> 442 Belle Terre
												St Floor 7, San Francisco, AV 4206
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Drawer;
