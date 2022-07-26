import Button from '../button/Button';
import Container from '../container/Container';
import classes from './Section.module.css';

const Section = ({
	title,
	subtitle,
	description,
	children,
	text,
	className,
}) => {
	return (
		<section className={`${classes.section} ${className}`}>
			<Container>
				<div className={`${classes.contents} ${className}`}>
					<div className={classes.sectionContents}>
						<h2>{title}</h2>
						<h3>{subtitle}</h3>
						<p>{description}</p>
						<Button text={text} />
					</div>
					<div className={classes.sectionContents}>{children}</div>
				</div>
			</Container>
		</section>
	);
};

export default Section;
