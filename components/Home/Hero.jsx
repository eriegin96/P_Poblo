import React from 'react';
import Button from '../Button';

export default function Hero() {
	return (
		<section className='Section Section-row Section-nopadding'>
			<div className='w-4/5 flex flex-col mx-auto sm:w-full'>
				<h2 className='SectionTitle SectionTitle-main'>
					Welcome to <br />
					My Personal Portfolio
				</h2>
				<p className='SectionText'>
					The purpose of JavaScript Mastery is to help aspiring and established developers to take
					their development skills to the next level and build awesome apps.
				</p>
				<Button /* onClick={() => (window.location = 'https://google.com')} */>Learn More</Button>
			</div>
		</section>
	);
}
