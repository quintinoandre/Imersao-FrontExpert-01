import { useRouter } from 'next/router';
import React from 'react';

import { PageTemplate, DishList } from '@components';

import Styles from '../../styles/discover.module.css';

function Discover() {
	const router = useRouter();

	const {
		query: { city },
	} = router;

	return (
		<PageTemplate>
			<div className={Styles.content}>
				<h1>Options in the region of {city}</h1>
				<p>We have found n options</p>
				<div className={Styles.items}>
					<DishList />
				</div>
			</div>
		</PageTemplate>
	);
}

export default Discover;
