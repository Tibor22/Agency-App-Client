import { useContext } from 'react';
import { UserContext } from '../src/context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from '../src/pages/Home';
import ContactUs from '../src/pages/ContactUs';
import AboutUs from '../src/pages/AboutUs';
import HowItWorks from '../src/pages/HowItWorks';
import JobPost from '../src/pages/JobPost';
import Posts from '../src/pages/Posts';

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
