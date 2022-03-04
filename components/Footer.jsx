import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
	return (
		<section className='FooterWrapper'>
			<ul className='LinkList'>
				<div className='LinkColumn' id='phone'>
					<h4 className='LinkTitle'>Call</h4>
					<a href='tel:0907-607-638' className='LinkItem'>
						0907-607-638
					</a>
				</div>
				<div className='LinkColumn' id='email'>
					<h4 className='LinkTitle'>Email</h4>
					<a href='mailto:tritintruong96@gmail.com' className='LinkItem'>
						tritintruong96@gmail.com
					</a>
				</div>
			</ul>
			<div className='SocialIconsContainer'>
				<div className='CompanyContainer'>
					<p className='Slogan'>Innovating one project at a time</p>
				</div>
				<div className='SocialContainer'>
					<a href='https://github.com/eriegin96' className='SocialIcons'>
						<AiFillGithub size='3rem' />
					</a>
					<a href='https://www.linkedin.com/in/tin-truong-tri-516702123' className='SocialIcons'>
						<AiFillLinkedin size='3rem' />
					</a>
					<a href='https://instagram.com/eriegin' className='SocialIcons'>
						<AiFillInstagram size='3rem' />
					</a>
				</div>
			</div>
		</section>
	);
}
