// >> Modules
import styles from './history.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';

import line from '@/public/images/line.png';

// >> Script
export default function History(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Typography className={styles.desc} data-aos="fade-right">
					<span>Born from the ultimate gamble</span>
					<br />
					$OLR (One Last Ride) captures the thrill of market surges
					and the anticipation of Vegas nights. It&apos;s for those
					who see destiny in the charts and adventure in the unknown.
					This memecoin symbolizes the final play, blending the
					volatility of crypto with the spirit of a last bet.
					&apos;One Last Ride&apos; isn&apos;t just a
					currency—it&apos;s the final call to the brave, a nod to the
					ultimate risk in the crypto game.
				</Typography>
			</div>
			<div className={styles.bottomLine}>
				<Image
					src={line}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
		</div>
	);
}
