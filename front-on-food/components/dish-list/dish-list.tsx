import React from 'react';
import { useQuery } from 'react-query';

import { Dish, DishSkeleton } from '@components';
import { api } from '@services';
import { DishType } from '@types';

import Styles from './dish-list.module.css';
import { DishListProps } from './types';

function DishList({ ...props }: DishListProps) {
	const fetchDishes = async () => {
		const response = await api.get<DishType[]>(
			`/deliveries?city=${props.citySlug}`
		);

		return response.data;
	};

	const { data, isFetching } = useQuery<DishType[]>('dishes', fetchDishes);

	return (
		<div className={Styles.list}>
			{isFetching ? (
				<DishSkeleton />
			) : (
				data?.map((dish) => <Dish key={dish.id} {...dish} />)
			)}
		</div>
	);
}

export { DishList };
