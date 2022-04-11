import { useRouter } from 'next/router';
import React from 'react';

function Discover() {
	const router = useRouter();

	const {
		query: { city },
	} = router;

	return <h1>Discover, {city}</h1>;
}

export default Discover;
