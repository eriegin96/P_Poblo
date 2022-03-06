import Image from 'next/image';
import React from 'react';
import { PROJECTS } from '../../constants/portfolio';

export default function Projects() {
	return (
		<section id='projects' className='Section'>
			<div className='SectionDivider' />
			<h2 className='SectionTitle SectionTitle-main'>Projects</h2>
			<section className='flex flex-col p-8 pb-0 mb-8 sm:grid sm:grid-cols-2 sm:p-12 sm:gap-x-8 sm:gap-y-12 sm:place-items-center'>
				{PROJECTS.map(({ id, image, title, description, tags, source, visit }) => (
					<div
						className='w-full sm:w-[400px] rounded-[10px] text-center shadow-projectCard'
						key={id}
					>
						<Image
							src={image}
							alt='img'
							width={300}
							height={200}
							className='w-full h-full object-cover overflow-hidden'
						/>

						<div className='w-full text-center z-20'>
							<h3 className='font-medium tracking-[2px] text-[#9cc9e3] py-2 text-[3rem]'>
								{title}
							</h3>
							<hr className='w-[50px] h-[3px] my-5 mx-auto bg-[#d0bb57]' />
						</div>

						<p className='p-[3px] w-full sm:py-0 sm:px-[50px] text-[#e4e6e7] text-xl leading-6 text-justify'>
							{description}
						</p>

						<div>
							<div className='w-full text-center z-20 text-2xl'>Stack</div>
							<ul className='flex justify-around p-8'>
								{tags.map((tag, i) => (
									<li className='text-2xl' key={i}>
										{tag}
									</li>
								))}
							</ul>
						</div>

						<ul className='flex justify-around my-10'>
							<a
								href={visit}
								className='text-[#d4c0c0] text-2xl py-4 px-6 bg-[#6b3030] rounded-[15px] duration-500 hover:bg-[#801414]'
							>
								Code
							</a>
							<a
								href={source}
								className='text-[#d4c0c0] text-2xl py-4 px-6 bg-[#6b3030] rounded-[15px] duration-500 hover:bg-[#801414]'
							>
								Source
							</a>
						</ul>
					</div>
				))}
			</section>
		</section>
	);
}
