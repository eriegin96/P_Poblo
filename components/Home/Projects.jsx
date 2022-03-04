import Image from 'next/image';
import React from 'react';
import { projects } from '../../constants/portfolio';

export default function Projects() {
	return (
		<section id='projects' className='Section'>
			<div className='SectionDivider' />
			<h2 className='SectionTitle' main>
				Projects
			</h2>
			<section className='GridContainer'>
				{projects.map(({ id, image, title, description, tags, source, visit }) => (
					<div className='BlogCard' key={id}>
						<Image src={image} alt='img' width={300} height={200} className='Img' />

						<div className='TitleContent'>
							<h3 className='HeaderThree' title={title} />
							<hr className='Hr' />
						</div>

						<p className='CardInfo'>{description}</p>

						<div>
							<div className='TitleContent'>Stack</div>
							<ul className='TagList'>
								{tags.map((tag, i) => (
									<li className='Tag' key={i}>
										{tag}
									</li>
								))}
							</ul>
						</div>

						<ul className='UtilityList'>
							<a href={visit} className='ExternalLinks'>
								Code
							</a>
							<a href={source} className='ExternalLinks'>
								Source
							</a>
						</ul>
					</div>
				))}
			</section>
		</section>
	);
}
