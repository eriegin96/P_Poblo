import {
	Accomplishments,
	BgAnimation,
	Hero,
	Projects,
	Technologies,
	Timeline,
} from '../components';

export default function Home() {
	return (
		<>
			<section className='Section Section-grid'>
				<Hero />
				<BgAnimation />
			</section>
			<Projects />
			<Technologies />
			<Timeline />
			<Accomplishments />
		</>
	);
}
