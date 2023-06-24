import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Contact from './components/Contact/index';
import FourZeroFour from './components/FourZeroFour/index';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import ServiceDetails from './components/Service/ServiceDetails';
import Success from './components/Success';
import Team from './components/Team';

export default function Routers() {
	return (
		<Routes>
			<Route path='*' element={<FourZeroFour />} />
			<Route exact path='/' element={<Home />} />
			<Route exact path='/about' element={<About />} />
			<Route exact path='/services' element={<Service />} />
			<Route exact path='/services/:slug' element={<ServiceDetails />} />
			<Route exact path='/portfolio' element={<Portfolio />} />

			<Route exact path='/team' element={<Team />} />
			<Route exact path='/blog' element={<Blog />} />
			<Route exact path='/blog/:slug' element={<BlogDetails />} />
			<Route exact path='/404' element={<FourZeroFour />} />
			<Route exact path='/success' element={<Success />} />
			<Route exact path='/contact' element={<Contact />} />
		</Routes>
	);
}
