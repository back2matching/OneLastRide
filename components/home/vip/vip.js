// >> Modules
import styles from './vip.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import vipLine from '@/public/images/vipLine.png';
import blueShadow from '@/public/images/blueShadow.svg';

// >> Script
export default function Vip(props) {
	return (
		<div className={styles.section} id="VIP">
			<div className={styles.inside}>
				<div className={styles.center}>
					<h1 className={styles.title} data-aos="fade-up">
						Exclusive VIP Club
					</h1>
					<Typography className={styles.desc} data-aos="fade-up">
						We are thrilled to extend to you a personal invitation
						to join our prestigious VIP Club, an exclusive community
						where the heartbeat of our innovative project comes to
						life. As a VIP member, you’re about to step into a world
						of privileged insights and exciting opportunities.
					</Typography>
					<div className={styles.button} data-aos="fade-up">
						<Button
							className={styles.btn}
							disableRipple
							href="https://google.com"
							target="_blank"
						>
							<Typography>JOIN</Typography>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.topLine}>
				<Image
					src={vipLine}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.bottomLine}>
				<Image
					src={vipLine}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.blueShadow}>
				<Image
					src={blueShadow}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
		</div>
	);
}
