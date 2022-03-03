import React from 'react';
import { Header } from '.';

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-black'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
