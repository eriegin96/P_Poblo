import React from 'react';
import { FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';

export default function Technologies() {
	return (
		<section id='tech' className='Section'>
			<div className='SectionDivider' />
			<br />
			<h2 className='SectionTitle'>Technologies</h2>
			<p className='SectionText'>
				I&apos;ve worked with a range a technologies in the web development world. From Back-end To
				Design
			</p>

			<ul className='List'>
				<li className='ListItem'>
					<FaReact size='3rem' />
					<div className='ListContainer'>
						<h4 className='ListTitle'>Front-End</h4>
						<p className='ListParagraph'>
							Experience with <br />
							Reactjs
						</p>
					</div>
				</li>

				<li className='ListItem'>
					<FaNodeJs size='3rem' />
					<div className='ListContainer'>
						<h4 className='ListTitle'>Back-End</h4>
						<p className='ListParagraph'>
							Experience with <br />
							Nodejs and Databases
						</p>
					</div>
				</li>

				<li className='ListItem'>
					<FaFigma size='3rem' />
					<div className='ListContainer'>
						<h4 className='ListTitle'>UI/UX</h4>
						<p className='ListParagraph'>
							Experience with <br />
							tools like Figma
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
