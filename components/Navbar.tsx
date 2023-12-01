"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { useState } from "react";

import { FaUser } from "react-icons/fa/";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClose, setMenuClose] = useState(false);

	const handleMenuOpen = () => {
		if (!menuOpen) {
			setMenuOpen(true);
		}
	};
	const handleMenuClose = () => {
		if (!menuClose) {
			setMenuClose(true);
		}
	};

	return (
		<nav className=' flex flexCenter w-full max-container padding-container relative bg-blue-300 z-30 py-5'>
			<Link href='/'>
				<span>Diani Beach Podcast</span>
			</Link>
			<ul
				className={`${
					!menuOpen
						? "flex flex-col sm:flex-row flexBetween h-full gap-12 lg:flex sm:flex-wrap"
						: "hidden"
				}`}>
				{NAV_LINKS.map((link) => (
					<li>
						<Link
							href={link.href}
							key={link.key}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<div className='flexCenter'>
				<Button
					type='button'
					title='Contributer'
					icon={FaUser}
					variant='btn_dark_green'
				/>
			</div>
			<Image
				src='menu.svg'
				alt='menu'
				width={28}
				height={28}
				className={`${
					!menuOpen ? "hidden" : "inline-block cursor-pointer md:hidden"
				}`}
				onClick={handleMenuOpen}
			/>
			<Image
				src='close.svg'
				alt='menu'
				width={28}
				height={28}
				className={`${
					!menuOpen ? "hidden" : "inline-block cursor-pointer md:hidden"
				}`}
				onClick={handleMenuOpen}
			/>
			<ul
				className={`${
					!menuClose
						? "hidden"
						: "flex flex-col h-full gap-12 lg:flex sm:flex-wrap sm:justify-center bg-blue-300"
				}`}>
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
