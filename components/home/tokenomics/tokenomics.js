// >> Modules
import styles from './tokenomics.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';

import tokenomicsTitle from '@/public/images/tokenomicsTitle.png';
import pointsLine from '@/public/images/pointsLine.png';

import tokenomics1 from '@/public/images/tokenomics/tokenomics1.svg';
import tokenomics2 from '@/public/images/tokenomics/tokenomics2.svg';
import tokenomics3 from '@/public/images/tokenomics/tokenomics3.svg';
import tokenomics4 from '@/public/images/tokenomics/tokenomics4.svg';
import tokenomics5 from '@/public/images/tokenomics/tokenomics5.svg';
import tokenomics6 from '@/public/images/tokenomics/tokenomics6.svg';

const points = [
	{
		icon: tokenomics1,
		text: 'Transparent and Immutable Smart Contracts',
	},
	{
		icon: tokenomics2,
		text: '100% Liquidity Burned',
	},
	{
		icon: tokenomics3,
		text: 'Redistribution Rewards for Holders',
	},
	{
		icon: tokenomics4,
		text: 'Decentralized Governance Model',
	},
	{
		icon: tokenomics5,
		text: 'Zero Transaction Tax',
	},
	{
		icon: tokenomics6,
		text: 'Dynamic Liquidity Pool Allocation',
	},
];

// >> Script
export default function Tokenomics(props) {
	return (
		<div className={styles.section} id="Tokenomics">
			<div className={styles.inside}>
				<h1 className={styles.title} data-aos="fade-up">
					Tokenomics and Gambling Mechanics
					<span className={styles.tokenomicsTitle}>
						<Image
							src={tokenomicsTitle}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</span>
				</h1>
				<div className={styles.points} data-value="left">
					{points.map((element, index) => {
						return (
							<div
								className={styles.onePoint}
								key={index}
								data-aos="fade-up"
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
								<Typography className={styles.text}>
									{element.text}
								</Typography>
							</div>
						);
					})}
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
