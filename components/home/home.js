// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';

import line from '@/public/images/line.png';

// >> Components
import Nav from './nav/nav';
import History from './history/history';
import Points from './points/points';
import Tokenomics from './tokenomics/tokenomics';
import Roadmap from './roadmap/roadmap';
import Vip from './vip/vip';
import Bottom from './bottom/bottom';

// >> Script
export default function Home(props) {
	return (
		<div className={styles.page}>
			<div className={styles.heroBg} id="Home">
				<Nav />
				<video
					src="./heroBg.mp4"
					autoPlay
					loop
					muted
					playsInline
					className={styles.videoDiv}
				></video>

				<h1 className={styles.title} data-aos="zoom-in">
					One Last Ride
				</h1>
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
			<History />
			<Points />
			<Tokenomics />
			<Roadmap setLoading={props.setLoading} />
			<Vip />
			<Bottom />
		</div>
	);
}
