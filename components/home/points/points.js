// >> Modules
import styles from './points.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';

import sellingPointsTitle from '@/public/images/sellingPointsTitle.png';
import pinkShadow from '@/public/images/pinkShadow.svg';
import pointsLine from '@/public/images/pointsLine.png';
import star from '@/public/icons/star.svg';

// >> Script
export default function Points(props) {
	return (
		<div className={styles.section} id="Points">
			<div className={styles.inside}>
				<div className={styles.pinkShadow1}>
					<Image
						src={pinkShadow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.pinkShadow2}>
					<Image
						src={pinkShadow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<h1 className={styles.title} data-aos="fade-up">
					Unique Selling Points
					<span className={styles.sellingPointsTitle}>
						<Image
							src={sellingPointsTitle}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</span>
				</h1>
				<div
					className={styles.onePoint}
					data-value="left"
					data-aos="fade-right"
				>
					<div className={styles.pointTitle}>
						<Image
							src={star}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>
							What Happens in Crypto, Stays in Crypto
						</Typography>
					</div>
					<Typography className={styles.desc}>
						One Last Ride captures the essence of Vegas
						confidentiality, turning each crypto venture into a
						private yet thrilling journey.
					</Typography>
				</div>
				<div
					className={styles.onePoint}
					data-value="right"
					data-aos="fade-left"
				>
					<div className={styles.pointTitle}>
						<Typography>High Roller, Low Coiner</Typography>
						<Image
							src={star}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<Typography className={styles.desc}>
						Celebrating every player, treating small stakes with the
						same reverence as major bets, ensuring everyone gets a
						taste of the high-stakes action.
					</Typography>
				</div>
				<div
					className={styles.onePoint}
					data-value="left"
					data-aos="fade-right"
				>
					<div className={styles.pointTitle}>
						<Image
							src={star}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Last Bet, New Chapter</Typography>
					</div>
					<Typography className={styles.desc}>
						One Last Ride is more than a token; it&apos;s your
						ultimate wager in the crypto arena, embodying the spirit
						of risk for a new beginning. Here, the final bet opens
						the door to unparalleled opportunities, allowing you to
						carve out a new path in the digital world.
					</Typography>
				</div>
			</div>
			<div className={styles.bottomLine}>
				<Image
					src={pointsLine}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
		</div>
	);
}
