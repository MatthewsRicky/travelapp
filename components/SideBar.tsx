import { SIDEBAR_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const SideBar = () => {
	return (
		<section className='relative'>
			<nav className='fixed z-200 left-0 right-[60%]'>
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
			</nav>
		</section>
	);
};

export default SideBar;
