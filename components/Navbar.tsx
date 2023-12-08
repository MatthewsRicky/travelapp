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
import Socials from "./Socials";

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
				<Link
					href='/'
					className='flex items-center'>
					<span>Diani Beach Podcast</span>
				</Link>
				<ul className='hidden justify-center items-center gap-6 sm:flex flex-row'>
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
				<Socials />

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

				<ul className='flex sm:hidden items-center justify-center rounded full gap-6 flex-row'>
					<li className='flex px-2 py-2 items-center justify-center shadow-lg rounded-full'>
						<Link href='/'>
							<FaFacebook />
						</Link>
					</li>
					<li className='flex px-2 py-2 items-center justify-center shadow-lg rounded-full'>
						<Link href='/'>
							<FaInstagram />
						</Link>
					</li>
					<li className='flex px-2 py-2 items-center justify-center shadow-lg rounded-full'>
						<Link href='/'>
							<FaTwitter />
						</Link>
					</li>
				</ul>
			</ul>
		</nav>
	);
};

export default Navbar;
