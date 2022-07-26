import Container from '../container/Container';
import NavLinks from '../nav-links/NavLinks';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div>
			<nav className={classes.nav}>
				<Container className={classes.navContents}>
					<div className={classes.brand}>
						<h3>Induz</h3>
					</div>
					<div className={classes.menu}>
						<NavLinks />
					</div>
				</Container>
			</nav>
			<main>{children}</main>
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
							<NavLinks className={classes.footerLinks} />
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
