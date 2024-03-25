// >> Imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const name = 'One Last Ride';
const desc =
	'$OLR distills the spirit of high-stakes adventure and personal revelation. Join SolJack Horseman on this One Last Ride and place the ultimate bet on yourself.';
const img = 'https://i.imgur.com/4a25UdL.png';

// >> Script
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#080715" />

					<meta property="og:type" content="website" />

					<meta property="og:title" content={name} />
					<meta name="twitter:title" content={name} />

					<meta name="description" content={desc} />
					<meta property="og:description" content={desc} />
					<meta name="twitter:description" content={desc} />

					<meta property="og:image" content={img} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={img} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
