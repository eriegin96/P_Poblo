import React from 'react';
import Button from '../Button';

export default function Hero() {
	return (
		<section className='Section' row nopadding>
			<div className='LeftSection'>
				<h2 className='SectionTitle' main center>
					Welcome to <br />
					My Personal Portfolio
				</h2>
				<p className='SectionText'>
					The purpose of JavaScript Mastery is to help aspiring and established developers to take
					their development skills to the next level and build awesome apps.
				</p>
				<Button onClick={() => (window.location = 'https://google.com')}>Learn More</Button>
			</div>
		</section>
	);
}
