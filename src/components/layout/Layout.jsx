import { Link } from '@reach/router';
import Container from '../container/Container';
import classes from './Layout.module.css';

const Layout = (props) => {
	console.log(window.location.pathname);
	return (
		<div>
			<nav className={classes.nav}>
				<Container className={classes.navContents}>
					<div className={classes.brand}>
						<h3>Induz</h3>
					</div>
					<div className={classes.menu}>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<Link to="/services">Services</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</Container>
			</nav>
			<main>{props.children}</main>
			<footer className={classes.footer}>
				<Container>
					<div className={classes.infoSection}>
						<div className={classes.footerContact}>
							<h3>Quick Contact</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
								voluptatibus nobis reiciendis recusandae accusantium minima
								ratione corrupti assumenda maxime necessitatibus. Dolor porro
								soluta maxime ipsum alias cupiditate dolorum consectetur itaque!
							</p>
						</div>
						<div className={classes.footerLinks}>
							<h3>Quick Links</h3>
							<ul>
								<li>Home</li>
								<li>About Us</li>
								<li>Services</li>
								<li>Contacts</li>
							</ul>
						</div>
					</div>
					<div className={classes.copyright}>
						&copy; 2022. All rights reserved. Aditya Chakraborty
					</div>
				</Container>
			</footer>
		</div>
	);
};

export default Layout;
