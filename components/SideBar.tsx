"use client";

import { SIDEBAR_LINKS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaAnchor } from "react-icons/fa";

const SideBar = () => {
	const [sideopen, setSideOpen] = useState(false);

	const handleSideBar = (setSideOpen: any) => {
		if (sideopen) {
			setSideOpen = true;
		}
	};

	return (
		<section className='relative'>
			<button
				className={`${
					!sideopen
						? "fixed z-40 h-[20px] w-[20] top-[49%] left-8 md:left-12 bg-yellow-600/80 hover:bg-blue-600/80 hover:scale-105 text-white p-6 justify-center flex items-center rounded-md"
						: "hidden"
				}`}
				onClick={handleSideBar}>
				<FaAnchor />
			</button>

			<nav
				className={`${
					sideopen
						? "fixed text-center left-[2%] top-[27%] flex flex-col justify-between sm:justify-around items-center max-container padding-container my-3 rounded-md  z-30 py-2 gap-4 w-[18%] backdrop-blur-sm"
						: "hidden"
				}`}>
				<ul className='justify-center items-center gap-2 flex flex-col'>
					{SIDEBAR_LINKS.map((link) => (
						<li className='bg-slate-300/60 px-2 py-0.5 w-[100%] rounded-md text-slate-800 font-medium text-sm'>
							<Link
								href={link.href}
								key={link.key}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default SideBar;
