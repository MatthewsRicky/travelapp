"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { useState } from "react";

import {
	FaUser,
	FaAnkh,
	FaBars,
	FaEject,
	FaFacebook,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

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
		<nav className='flex flex-col md:flex-row justify-around items-center w-full max-container padding-container relative bg-blue-300 z-30 py-5 gap-4'>
			<div className='flex flex-row justify-between w-full'>
				<Link href='/'>
					<span>Diani Beach Podcast</span>
				</Link>
				<ul className='hidden justify-center gap-6 sm:flex flex-row'>
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
				<ul className='hidden bg-orange-300 justify-center gap-6 sm:flex flex-row'>
					<li>
						<Link href='/'>
							<FaFacebook />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<FaInstagram />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<FaTwitter />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<FaUser />
						</Link>
					</li>
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
			</div>

			<ul
				className={`${
					menuOpen
						? "flex flex-col flexBetween gap-12 lg:flex sm:hidden"
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
		</nav>
	);
};

export default Navbar;
