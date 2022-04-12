import React from 'react';

import Styles from './footer.module.css';

function Footer() {
	return (
		<footer>
			<div className={Styles.footer}>
				<p>@ 2022 - Imersão FrontExpert</p>
			</div>
		</footer>
	);
}

export { Footer };
