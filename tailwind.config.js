module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				buttonFront: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
				buttonBack: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
				carouselItemTitle:
					'linear-gradient(121.57deg, #ffffff 10%, rgba(255, 255, 255, 0.66) 30.15%)',
				sectionTitle:
					'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',
				sectionDivider: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
			},
			borderRadius: {
				50: '50px',
			},
			boxShadow: {
				buttonFront:
					'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)',
				secondaryBtn:
					'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)',
				projectCard: '3px 3px 20px rgba(80, 78, 78, 0.5)',
			},
			colors: {
				accent1: '#fec576',
				bg1: '#0F1624',
				bg2: '#2c304d',
				button: '#006bb8',
				primary: '#f2f5f7',
				'transparent-b-50': 'rgba(0, 0, 0, 0.5)',
				'transparent-b-75': 'rgba(0, 0, 0, 0.75)',
				'transparent-w-10': 'rgba(255, 255, 255, 0.1)',
				'transparent-w-30': 'rgba(255, 255, 255, 0.3)',
				'transparent-w-40': 'rgba(255, 255, 255, 0.4)',
				'transparent-w-50': 'rgba(255, 255, 255, 0.5)',
				'transparent-w-75': 'rgba(255, 255, 255, 0.75)',
			},
			dropShadow: {
				titleBtn: '0 0 10px rgba(80, 80, 80, 0.75)',
			},
			scale: {
				120: '1.2',
				160: '1.6',
			},
			transitionDuration: {
				400: '400ms',
			},
		},
	},
	plugins: [],
};
