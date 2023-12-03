"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { useState } from "react";

import { FaUser, FaAnkh, FaBars, FaEject } from "react-icons/fa";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuOpen = (menuOpen: any) => {
		if (menuOpen) {
			setMenuOpen(true);
		}
	};
	const handleMenuClose = (menuClose: any) => {
		if (menuOpen) {
			setMenuOpen(false);
		}
	};
	return (
		<nav className=' flex flexCenter w-full max-container padding-container relative bg-blue-300 z-30 py-5 gap-4'>
			<Link href='/'>
				<span>Diani Beach Podcast</span>
			</Link>
			<ul className='hidden sm:flex flex-row'>
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
			<ul
				className={`${
					menuOpen
						? "hidden sm:flex flex-col sm:flex-row flexBetween h-full gap-12 lg:flex sm:flex-wrap"
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
				<button
					onClick={handleMenuOpen}
					className={`${
						!menuOpen ? "sm:hidden flex relative z-30" : "hidden"
					}`}>
					<FaBars />
				</button>
				<button
					onClick={handleMenuClose}
					className={`${
						!menuOpen ? "hidden" : "sm:hidden flex relative z-30"
					}`}>
					<FaAnkh />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
