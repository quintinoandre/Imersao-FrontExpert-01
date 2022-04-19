import Image from 'next/image';
import React from 'react';

import { DishDetails } from '@components';
import { DishType } from '@types';

import Styles from './dish.module.css';

function Dish({ ...props }: DishType) {
	return (
		<div className={Styles.dish}>
			<div className={Styles.wrapper}>
				<Image
					src={props.picture}
					alt={props.name}
					width={592}
					height={312}
					layout="responsive"
				/>
			</div>
			<div className={Styles.header}>
				<h2>{props.name}</h2>
			</div>
			<div className={Styles.details}>
				<DishDetails
					type="reviews"
					title={props.reviews}
					subtitle={props.rate}
				/>
				<DishDetails type="category" title={props.category} />
				<DishDetails type="delivery" title={props.deliveryEstimate} />
			</div>
		</div>
	);
}

export { Dish };
