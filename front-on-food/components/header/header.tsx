import Link from 'next/link';
import React from 'react';

function Header() {
	return (
		<header>
			<nav className="max-w-7xl mx-auto py-8 flex items-center justify-between">
				<div className="bg-gray-200">[Logo]</div>
				<ul className="flex">
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/favorites">
							<a>Favorites</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export { Header };
