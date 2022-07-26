import { useContext } from 'react';
import { UserContext } from '../src/context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import ContactUs from './pages/ContacUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import JobPost from './pages/JobPost/JobPost';
import Posts from './pages/Posts/Posts';

function App() {
	const { user, isLoggedIn } = useContext(UserContext);
	console.log(user, isLoggedIn);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/how-it-works' element={<HowItWorks />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/:id' element={<JobPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
