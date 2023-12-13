import { SIDEBAR_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const SideBar = () => {
	return (
		<section>
			<nav>
				<ul className='hidden justify-center items-center gap-6 sm:flex flex-row'>
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
