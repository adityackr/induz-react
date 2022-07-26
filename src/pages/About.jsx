import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';
import historyImage from '../images/about-01.jpg';
import storyImage from '../images/about-02.jpg';
import classes from './About.module.css';

const About = () => {
	return (
		<Layout>
			<Section
				title="About Us"
				subtitle="Company History"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum laboriosam a distinctio ullam obcaecati fuga in mollitia reiciendis
				illo, voluptatum vel quaerat. Harum accusamus numquam laudantium
				voluptatum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
				dolores nihil suscipit aspernatur ullam cum. Autem, numquam? Officiis,
				tenetur voluptas, illum voluptates exercitationem doloremque vero labore
				et ab nesciunt voluptate!"
				text="Read More"
			>
				<img className={classes.image} src={historyImage} alt="history" />
			</Section>
			<Section
				title="Our Story"
				subtitle="Connecting Things, It's all about people"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem natus
				cum laboriosam a distinctio ullam obcaecati fuga in mollitia reiciendis
				illo, voluptatum vel quaerat. Harum accusamus numquam laudantium
				voluptatum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
				dolores nihil suscipit aspernatur ullam cum. Autem, numquam? Officiis,
				tenetur voluptas, illum voluptates exercitationem doloremque vero labore
				et ab nesciunt voluptate!"
				text="Read More"
				className={classes.section}
			>
				<img className={classes.image} src={storyImage} alt="story" />
			</Section>
		</Layout>
	);
};

export default About;
