// >> Modules
import styles from './nav.module.scss';
import design from '@/styles/design_system.module.scss';
import { Link } from 'react-scroll';

// >> Script
export default function Nav(props) {
	return (
		<div className={styles.section} data-aos="fade-down">
			<div className={styles.inside}>
				<Link to="Home" className={styles.oneTab}>
					Home
				</Link>
				<Link to="Points" className={styles.oneTab}>
					Points
				</Link>
				<Link to="Tokenomics" className={styles.oneTab}>
					Tokenomics
				</Link>
				<Link to="Roadmap" className={styles.oneTab}>
					Roadmap
				</Link>
				<Link to="VIP" className={styles.oneTab}>
					VIP
				</Link>
			</div>
		</div>
	);
}
