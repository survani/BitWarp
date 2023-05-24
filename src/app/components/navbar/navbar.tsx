'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
	return (
		<>
			<Navbar fluid={false} rounded={false}>
				<Navbar.Brand href='/'>
					<Image
						src='/bitwarp-black.webp'
						className='w-full h-6 mr-3 sm:h-9'
						alt='BitWarp Logo'
						width={200}
						height={200}
					/>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link href='/' active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link href='/about'>About</Navbar.Link>
					<Navbar.Link href='/pricing'>Pricing</Navbar.Link>
					<Navbar.Link href='/contact'>Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavBar;
