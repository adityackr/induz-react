import { Router } from '@reach/router';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
	return (
		<div>
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Services path="/services" />
				<Contact path="/contact" />
			</Router>
		</div>
	);
}

export default App;
