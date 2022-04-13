import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IconBookmark } from '@icons';

import Styles from './header.module.css';

function Header() {
	return (
		<header>
			<nav className={Styles.nav}>
				<div className={Styles.brand}>
					<Link href="/">
						<a>
							<Image
								src="/images/logo.png"
								width={45}
								height={36}
								alt="OnFood"
							/>
							<span>OnFood</span>
						</a>
					</Link>
				</div>
				<ul>
					<li>
						<Link href="/">
							<a>
								<IconBookmark />
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href="/favorites">
							<a>
								<IconBookmark />
								Favorites
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export { Header };
