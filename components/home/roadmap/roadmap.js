// >> Modules
import styles from './roadmap.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';

import roadmapTitle from '@/public/images/roadmapTitle.png';
import roadmapLine from '@/public/images/roadmapLine.png';

import roadmapArrow from '@/public/images/roadmap/roadmapArrow.gif';
import roadmap1 from '@/public/images/roadmap/roadmap1.gif';
import roadmap2 from '@/public/images/roadmap/roadmap2.gif';
import roadmap3 from '@/public/images/roadmap/roadmap3.gif';
import roadmap4 from '@/public/images/roadmap/roadmap4.gif';
import roadmap5 from '@/public/images/roadmap/roadmap5.gif';
import roadmap6 from '@/public/images/roadmap/roadmap6.gif';

const points = [
	{
		icon: roadmap1,
		title: 'Launch Phase',
		desc: 'Buckle up for the ride: Official Launch.',
		color: 'yellow',
	},
	{
		icon: roadmap2,
		title: 'Community Growth',
		desc: 'Build the crew: Reach 500 Telegram Members.',
		color: 'red',
	},
	{
		icon: roadmap3,
		title: 'Market Development',
		desc: 'Hit the jackpot: Achieve $500K Market Cap.',
		color: 'blue',
	},
	{
		icon: roadmap4,
		title: 'Spread the word',
		desc: 'Get Listed on a Major Exchange.',
		color: 'yellow',
	},
	{
		icon: roadmap5,
		title: 'Consolidation and Growth',
		desc: 'The big score: Reach $1M Market Cap.',
		color: 'red',
	},
	{
		icon: roadmap6,
		title: 'Community & Socials',
		desc: 'Inviting the High Rollers',
		color: 'blue',
	},
];

// >> Script
export default function Roadmap(props) {
	return (
		<div className={styles.section} id="Roadmap">
			<div className={styles.inside}>
				<h1 className={styles.title} data-aos="fade-up">
					Our Roadmap
					<span className={styles.roadmapTitle}>
						<Image
							src={roadmapTitle}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</span>
					<span className={styles.arrow1}>
						<Image
							src={roadmapArrow}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</span>
					<span className={styles.arrow2}>
						<Image
							src={roadmapArrow}
							alt=""
							quality={99}
							priority={true}
							className="image"
							onLoad={() => {
								props.setLoading(false);
							}}
						/>
					</span>
				</h1>
				<div className={styles.points} data-value="left">
					{points.map((element, index) => {
						return (
							<div
								className={styles.onePoint}
								key={index}
								data-value={
									(index + 1) % 2 === 0 ? 'right' : 'left'
								}
								data-color={element.color}
								data-aos={
									(index + 1) % 2 === 0
										? 'fade-left'
										: 'fade-right'
								}
							>
								<div className={styles.icon}>
									<Image
										src={element.icon}
										alt=""
										quality={99}
										priority={true}
										className="image"
									/>
								</div>
								<div className={styles.texts}>
									<Typography className={styles.pointTitle}>
										{element.title}
									</Typography>
									<Typography className={styles.pointDesc}>
										{element.desc}
									</Typography>
								</div>

								<div className={styles.roadmapLine}>
									<Image
										src={roadmapLine}
										alt=""
										quality={99}
										priority={true}
										className="image"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
