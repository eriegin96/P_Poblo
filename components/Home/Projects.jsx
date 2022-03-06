import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '../../constants/portfolio';

export default function Projects() {
	return (
		<section id='projects' className='Section'>
			<div className='SectionDivider' />
			<h2 className='SectionTitle SectionTitle-main'>Projects</h2>
			<section className='flex flex-col p-8 pb-0 mb-8 sm:grid sm:grid-cols-2 sm:p-0 sm:gap-x-8 sm:gap-y-12 sm:place-items-center'>
				{PROJECTS.map(({ id, image, title, name }) => (
					<div
						className='w-full pt-4 px-2 sm:pt-8 sm:px-6 sm:col-span-1 rounded-2xl text-center shadow-projectCard'
						key={id}
					>
						<Link href={`/post/${id}`} passHref>
							<div className='relative group overflow-y-hidden w-full max-h-[225px] rounded-2xl'>
								<Image
									src={image}
									alt='img'
									width={400}
									height={225}
									className='absolute left-0 top-0 object-cover overflow-hidden cursor-pointer'
								/>
								<p className='absolute -bottom-16 group-hover:bottom-0 bg-transparent-b-75 duration-400 ease-out p-1 px-4 w-full sm:py-2 lg:px-[50px] text-[#e4e6e7] text-base md:text-xl leading-6 text-justify cursor-pointer'>
									{title}
								</p>
							</div>
						</Link>

						{/* text-[#9cc9e3] */}
						<div className='flex items-center justify-center py-4'>
							<Link href={`/post/${id}`} passHref>
								<h3 className='Title cursor-pointer'>{name}</h3>
							</Link>
						</div>
					</div>
				))}
			</section>
		</section>
	);
}
