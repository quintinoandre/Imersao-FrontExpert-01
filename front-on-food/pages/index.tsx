import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Character, PageTemplate, Search } from '@components';

import Styles from '../styles/internals.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>OnFood App</title>
				<meta name="description" content="Find options in Delivery near you" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PageTemplate>
				<div className={Styles.content}>
					<h1>Find options in Delivery near you.</h1>
					<Search />
					<h2>
						Discover your new favorite Delivery. Thousands of options at one
						click.
					</h2>
					<Character />
				</div>
			</PageTemplate>
		</>
	);
};

export default Home;
