import Button from '../components/button/Button';
import Container from '../components/container/Container';
import Layout from '../components/layout/Layout';
import classes from './Contact.module.css';

const Contact = () => {
	return (
		<Layout>
			<div className={classes.contactSection}>
				<Container>
					<div className={classes.contact}>
						<h3>Contact Us</h3>
						<form className={classes.form}>
							<input type="email" placeholder="Enter You Email" />
							<textarea placeholder="Enter Your Message"></textarea>
							<Button text="Submit" type="submit" />
						</form>
					</div>
				</Container>
			</div>
		</Layout>
	);
};

export default Contact;
