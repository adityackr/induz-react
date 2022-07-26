import Button from '../components/button/Button';
import Layout from '../components/layout/Layout';
import classes from './Home.module.css';

const Home = () => {
	return (
		<Layout>
			<div className={classes.home}>
				<h1>The Reliable Industry Takes Many Forms.</h1>
				<Button text="Read More" />
			</div>
		</Layout>
	);
};

export default Home;
