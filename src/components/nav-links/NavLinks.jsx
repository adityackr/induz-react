import { Link } from '@reach/router';
import classes from './NavLinks.module.css';

const NavLinks = ({ className }) => {
	const path = window.location.pathname;
	return (
		<ul className={`${classes.navLinks} ${className}`}>
			<li>
				<Link
					to="/"
					className={path === '/' ? classes.active : classes.navLink}
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					to="/about"
					className={path === '/about' ? classes.active : classes.navLink}
				>
					About Us
				</Link>
			</li>
			<li>
				<Link
					to="/services"
					className={path === '/services' ? classes.active : classes.navLink}
				>
					Services
				</Link>
			</li>
			<li>
				<Link
					to="/contact"
					className={path === '/contact' ? classes.active : classes.navLink}
				>
					Contact
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
