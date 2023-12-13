import { SIDEBAR_LINKS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const SideBar = () => {
	return (
		<section className='relative'>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='fixed text-center sm:left-[2.5%] md:left-[10%] lg:left-[17.5%] flex flex-col md:flex-row justify-between sm:justify-around items-center max-container padding-container my-3 sm:rounded-full bg-blue-200/60 z-30 py-2 gap-4 w-full sm:w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] backdrop-blur-sm'>
				<ul className='justify-center items-center gap-6 flex flex-col'>
					{SIDEBAR_LINKS.map((link) => (
						<li className='bg-blue-300/60 px-2 py-0.5 rounded-md text-slate-800 font-medium text-sm md:text-md'>
							<Link
								href={link.href}
								key={link.key}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</motion.nav>
		</section>
	);
};

export default SideBar;
