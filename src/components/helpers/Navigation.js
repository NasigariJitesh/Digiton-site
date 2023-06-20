import { Link } from 'react-router-dom';

function Navigation({ className }) {
	return (
		<div className={`restly-header-main-menu ${className || ''}`}>
			<ul>
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
	);
}

export default Navigation;
