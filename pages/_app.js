import React from 'react';
import Head from 'next/head';

import { Layout } from '../components';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>PoBlo</title>
				<meta name='description' content='Poblo' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
