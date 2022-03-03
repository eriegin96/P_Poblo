import Head from 'next/head';

export default function Home() {
	return (
		<div className='container mx-auto'>
			<Head>
				<title>PoBlo</title>
				<meta name='description' content='PoBlo' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</div>
	);
}
