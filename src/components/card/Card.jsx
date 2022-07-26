import classes from './Card.module.css';

const Card = ({ img, alt, title, description }) => {
	return (
		<div className={classes.card}>
			<img className={classes.icon} src={img} alt={alt} />
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default Card;
