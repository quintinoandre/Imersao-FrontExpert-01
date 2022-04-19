import React from 'react';

import { Dish } from '@components';

import Styles from './dish-list.module.css';

function DishList() {
	return (
		<div className={Styles.list}>
			<Dish />
			<Dish />
			<Dish />
			<Dish />
			<Dish />
		</div>
	);
}

export { DishList };
