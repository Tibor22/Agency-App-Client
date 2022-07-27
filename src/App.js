import { useContext } from 'react';
import { UserContext } from '../src/context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import ContactUs from './pages/ContacUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import HowItWorksEmployee from './pages/HowItWorks/HowItWorksEmployee';
import HowItWorksEmployer from './pages/HowItWorks/HowItWorksEmployer';
import JobPost from './pages/JobPost/JobPost';
import Posts from './pages/Posts/Posts';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';

function App() {
	const { user, isLoggedIn } = useContext(UserContext);
	console.log(user, isLoggedIn);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/how-it-works/employee' element={<HowItWorksEmployee />} />
				<Route path='/how-it-works/employer' element={<HowItWorksEmployer />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/:id' element={<JobPost />} />
				<Route path='/sign-in/:type' element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
