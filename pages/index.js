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
		<section className='Section grid'>
			<Hero />
			<BgAnimation />
			<Projects />
			<Technologies />
			<Timeline />
			<Accomplishments />
		</section>
	);
}
