import Link from 'next/link';
import React from 'react';

import { ItemLinkProps } from './types';

function ItemLink({ href, children, ...rest }: ItemLinkProps) {
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

export { ItemLink };
