import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

// import { getCategories } from '../services';

const Header = () => {
	const [categories, setCategories] = useState([]);

	// useEffect(() => {
	// 	getCategories().then((newCategories) => setCategories(newCategories));
	// }, []);

	return (
		/*
		 *	Blog
		 */
		// <div className='container mx-auto px-10 mb-8'>
		// 	<div className='border-b w-full inline-block border-blue-400 py-8'>
		// 		<div className='md:float-left block'>
		// 			<Link href='/' passHref>
		// 				<span className='cursor-pointer font-bold text-4xl text-white'>PoBlo</span>
		// 			</Link>
		// 		</div>
		// 		<div className='hidden md:float-left md:contents'>
		// 			Home
		// 			{categories.map((category) => (
		// 				<Link key={category.slug} href={`/category/${category.slug}`} passHref>
		// 					<span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
		// 						{category.name}
		// 					</span>
		// 				</Link>
		// 			))}
		// 		</div>
		// 	</div>
		// </div>

		<div className='Container'>
			<div className='Div1'>
				<Link href='/'>
					<a className='flex items-center'>
						<DiCssdeck size='3rem' />
						<span className='text-[2rem]'>Portfolio</span>
					</a>
				</Link>
			</div>
			<div className='Div2'>
				<li>
					<Link href='/'>
						<a className='NavLink'>Portfolio</a>
					</Link>
				</li>
				<li>
					<Link href='/post'>
						<a className='NavLink'>Blog</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a className='NavLink'>About</a>
					</Link>
				</li>
			</div>
		</div>
	);
};

export default Header;
