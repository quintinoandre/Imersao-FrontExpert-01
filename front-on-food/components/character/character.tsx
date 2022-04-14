import Image from 'next/image';
import React from 'react';

import Styles from './character.module.css';

function Character() {
	return (
		<div className={Styles.container}>
			<div className={Styles.device}>
				<Image
					src="/images/home/device.png"
					width={145}
					height={283}
					alt="Phone"
				/>
			</div>
			<div className={Styles.bubble}>
				<Image
					src="/images/home/speech-bubble.png"
					width={64}
					height={71}
					alt="Speech Bubble"
				/>
			</div>
			<div className={Styles.character}>
				<Image
					src="/images/home/character.png"
					width={183}
					height={246}
					alt="Character"
				/>
			</div>
			<div className={Styles.background}>
				<Image
					src="/images/home/background.png"
					width={328}
					height={318}
					alt="Background"
				/>
			</div>
			<hr />
		</div>
	);
}

export { Character };
