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
					<a className='Logo'>
						<DiCssdeck size='3rem' />
						<span className='text-xl'>Portfolio</span>
					</a>
				</Link>
			</div>
			<div className='Div2'>
				<li>
					<Link href='#projects'>
						<a className='NavLink'>Projects</a>
					</Link>
				</li>
				<li>
					<Link href='#tech'>
						<a className='NavLink'>Technologies</a>
					</Link>
				</li>
				<li>
					<Link href='#about'>
						<a className='NavLink'>About</a>
					</Link>
				</li>
			</div>
			<div className='Div3'>
				<a href='https://github.com/eriegin96' className='SocialIcons'>
					<AiFillGithub size='3rem' />
				</a>
				<a href='https://www.linkedin.com/in/tin-truong-tri-516702123/' className='SocialIcons'>
					<AiFillLinkedin size='3rem' />
				</a>
				<a href='https://instagram.com/eriegin' className='SocialIcons'>
					<AiFillInstagram size='3rem' />
				</a>
			</div>
		</div>
	);
};

export default Header;
