import Card from '../components/card/Card';
import Container from '../components/container/Container';
import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';
import automation from '../svg/automation.svg';
import integrity from '../svg/integrity.svg';
import safety from '../svg/safety.svg';
import tradition from '../svg/tradition.svg';
import classes from './Services.module.css';

const Services = () => {
	return (
		<Layout>
			<Section
				className={classes.section}
				title="Why Choose Us"
				subtitle="We Believe In Building Long Lasting Our Business Relationships"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum laboriosam a distinctio ullam obcaecati fuga in mollitia reiciendis
				illo, voluptatum vel quaerat. Harum accusamus numquam laudantium
				voluptatum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
				dolores nihil suscipit aspernatur ullam cum. Autem, numquam? Officiis,
				tenetur voluptas, illum voluptates exercitationem doloremque vero labore
				et ab nesciunt voluptate!"
				text="Get a Quote"
			></Section>

			<div className={classes.cards}>
				<Container className={classes.cardsContainer}>
					<Card
						img={integrity}
						alt="integrity"
						title="Integrity"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum."
					/>
					<Card
						img={automation}
						alt="automation"
						title="Automation"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum."
					/>
					<Card
						img={tradition}
						alt="tradition"
						title="Tradition"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum."
					/>
					<Card
						img={safety}
						alt="safety"
						title="Safety"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum."
					/>
				</Container>
			</div>
		</Layout>
	);
};

export default Services;
