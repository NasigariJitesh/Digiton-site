import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Contact from './components/Contact/index';
import FourZeroFour from './components/FourZeroFour/index';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProtfolioDetails from './components/Portfolio/PortfolioDetails';
import Service from './components/Service';
import ServiceDetails from './components/Service/ServiceDetails';
import Team from './components/Team';
import TeamSingle from './components/Team/TeamSingle';
import Testimonial from './components/Testimonial';

export default function Routers() {
	return (
		<Routes>
			<Route path='*' element={<FourZeroFour />} />
			<Route exact path='/' element={<Home />} />
			<Route exact path='/about' element={<About />} />
			<Route exact path='/services' element={<Service />} />
			<Route exact path='/service-details' element={<ServiceDetails />} />
			<Route exact path='/portfolio' element={<Portfolio />} />
			<Route exact path='/portfolio-details' element={<ProtfolioDetails />} />
			<Route exact path='/team' element={<Team />} />
			<Route exact path='/team-profile' element={<TeamSingle />} />
			<Route exact path='/testimonial' element={<Testimonial />} />
			<Route exact path='/blog' element={<Blog />} />
			<Route exact path='/blog-details' element={<BlogDetails />} />
			<Route exact path='/404' element={<FourZeroFour />} />
			<Route exact path='/contact' element={<Contact />} />
		</Routes>
	);
}
