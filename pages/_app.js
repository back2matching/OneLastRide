// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/fonts.css';
import '@/styles/globals.scss';

// >> Script
function MyApp({ Component, pageProps }) {
	// >> Variables
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);
	// >> Render
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />

			<Component {...pageProps} setLoading={setLoading} />

			<div className="pageLoader" data-visible={loading}>
				<div className="loading">
					<InfinitySpin color="#00c2ff" width="100%" />
				</div>
				<div className="loadingBlur">
					<InfinitySpin color="#00c2ff" width="100%" />
				</div>
			</div>
		</StyledEngineProvider>
	);
}

export default MyApp;
