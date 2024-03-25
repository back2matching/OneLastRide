// >> Modules
import styles from './bottom.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import twitterX from '@/public/images/twitterX.svg';
import telegram from '@/public/images/telegram.svg';

// >> Script
export default function Bottom(props) {
	return (
		<div className={styles.section} id="Bottom">
			<div className={styles.inside}>
				<h1 className={styles.title} data-aos="fade-up">
					Bet on Your Last Ride
				</h1>

				<div className={styles.buttons} data-aos="fade-up">
					<Button
						className={styles.oneSocial}
						disableRipple
						href="https://twitter.com/OLRsolana"
						target="_blank"
					>
						<div className={styles.logo}>
							<Image
								src={twitterX}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<Typography>One Last Ride</Typography>
					</Button>
					<Button
						className={styles.oneSocial}
						disableRipple
						href="https://t.me/OneLastRideSOL"
						target="_blank"
					>
						<div className={styles.logo}>
							<Image
								src={telegram}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<Typography>OneLastRideSOL</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}
