import Image from 'next/image';
import React from 'react';

import { DishDetails } from '@components';

import Styles from './dish.module.css';

function Dish() {
	return (
		<div className={Styles.dish}>
			<div className={Styles.wrapper}>
				<Image
					src="https://storage.googleapis.com/onfood/peperoni.jpg"
					alt="Dish"
					width={592}
					height={312}
					layout="responsive"
				/>
			</div>
			<div className={Styles.header}>
				<h2>Product Name</h2>
			</div>
			<div className={Styles.details}>
				<DishDetails type="reviews" title="(201)" subtitle="4.5" />
				<DishDetails type="category" title="Category" />
				<DishDetails type="delivery" title="30 - 40 min" />
			</div>
		</div>
	);
}

export { Dish };
