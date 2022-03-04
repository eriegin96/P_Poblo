import React from 'react';

const data = [
	{ number: 20, text: 'Open Source Projects' },
	{ number: 1000, text: 'Students' },
	{ number: 1900, text: 'Github Followers' },
	{ number: 5000, text: 'Github Stars' },
];

export default function Acomplishments() {
	return (
		<section className='Section'>
			<div className='SectionDivider' />
			<br />
			<h2 className='SectionTitle'>Personal Accomplishments</h2>
			<div className='Boxes'>
				{data.map((card, index) => (
					<div className='Box' key={index}>
						<h5 className='BoxNum'>{card.number}+</h5>
						<p className='BoxText'>{card.text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
