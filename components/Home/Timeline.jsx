import React, { useState, useRef, useEffect } from 'react';
import { TimelineData } from '../../constants/portfolio';

const TOTAL_CAROUSEL_COUNT = TimelineData.length;

export default function TimeLine() {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);
	}, []);

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: 'smooth' });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimelineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimelineData.length
			);

			setActiveItem(index);
		}
	};

	return (
		<section id='about' className='Section'>
			<div className='SectionDivider' />
			<br />
			<h2 className='SectionTitle'>About Me</h2>
			<p className='SectionText'>
				The purpose of JavaScript Mastery is to help aspiring and established developers to take
				their development skills to the next level and build awesome apps.
			</p>
			<ul className='CarouselContainer' ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimelineData.map((item, index) => (
						<div
							className='CarouselMobileScrollNode'
							key={index}
							final={index === TOTAL_CAROUSEL_COUNT - 1}
						>
							<div
								className='CarouselItem'
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e) => handleClick(e, index)}
							>
								<h4 className='CarouselItemTitle'>
									{item.year}
									<svg
										className='CarouselItemImg'
										width='208'
										height='6'
										viewBox='0 0 208 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
											fill='url(#paint0_linear)'
											fillOpacity='0.33'
										/>
										<defs>
											<linearGradient
												id='paint0_linear'
												x1='-4.30412e-10'
												y1='0.5'
												x2='208'
												y2='0.500295'
												gradientUnits='userSpaceOnUse'
											>
												<stop stopColor='white' />
												<stop offset='0.79478' stopColor='white' stopOpacity='0' />
											</linearGradient>
										</defs>
									</svg>
								</h4>
								<p className='CarouselItemText'>{item.text}</p>
							</div>
						</div>
					))}
				</>
			</ul>
			<div className='CarouselButtons'>
				{TimelineData.map((item, index) => (
					<button
						className='CarouselButton'
						key={index}
						index={index}
						active={activeItem}
						onClick={(e) => handleClick(e, index)}
						type='button'
					>
						<div className='CarouselButtonDot' active={activeItem} />
					</button>
				))}
			</div>
		</section>
	);
}
