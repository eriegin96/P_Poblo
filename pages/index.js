import { BgAnimation, Hero, Projects, Technologies } from '../components';

export default function Home() {
	return (
		<>
			<section className='Section Section-grid'>
				<Hero />
				<BgAnimation />
			</section>
			<Projects />
			<Technologies />
		</>
	);
}
