import React from 'react';

import { IconDelivery, IconCategory, IconReviews } from '@icons';

import Styles from './dish-details.module.css';
import { DishDetailsProps } from './types';

function DishDetails({ ...props }: DishDetailsProps) {
	let Icon;

	switch (props.type) {
		case 'delivery':
			Icon = IconDelivery;
			break;
		case 'category':
			Icon = IconCategory;
			break;
		default:
			Icon = IconReviews;
			break;
	}

	return (
		<div className={Styles.detail}>
			<div className={Styles.icon}>
				<Icon />
			</div>
			{props.subtitle && <span>{props.subtitle}</span>}
			{props.title}
		</div>
	);
}

export { DishDetails };
