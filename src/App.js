import { useContext } from 'react';
import { UserContext } from '../src/context/UserContext';

function App() {
	const { user, isLoggedIn } = useContext(UserContext);
	console.log(user, isLoggedIn);

	return <div className='App'>REACT</div>;
}

export default App;
