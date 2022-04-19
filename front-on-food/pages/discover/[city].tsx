import { useRouter } from 'next/router';
import React from 'react';

import { PageTemplate, DishList } from '@components';
import { api } from '@services';
import { CityProps, PageDiscoverProps, ParamsStaticProps } from '@types';

import Styles from '../../styles/discover.module.css';

function Discover({ ...props }: PageDiscoverProps) {
	return (
		<PageTemplate>
			<div className={Styles.content}>
				<h1>Options in the region of {props.city.name}</h1>
				<p>We have found {props.city.catalogEstimated} options</p>
				<div className={Styles.items}>
					<DishList citySlug={props.city.slug} />
				</div>
			</div>
		</PageTemplate>
	);
}

async function getStaticPaths() {
	const response = await api.get('/cities');

	const cities = response.data;

	const urls = cities.map((city: CityProps) => ({
		params: {
			city: city.slug,
		},
	}));

	return {
		paths: urls,
		fallback: false,
	};
}

async function getStaticProps({ params }: ParamsStaticProps) {
	const citySlug = params?.city as string;

	const response = await api.get(`/cities?citySlug=${citySlug}`);

	const city = response.data;

	return {
		props: {
			city,
		},
		revalidate: 30, // revalidate after 30 seconds
	};
}

export { getStaticPaths, getStaticProps };

export default Discover;
