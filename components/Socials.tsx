import Link from "next/link";
import React from "react";
import { FaUser, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Socials = () => {
	return (
		<>
			<ul className='hidden items-center rounded full gap-6 sm:flex flex-row'>
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
		</>
	);
};

export default Socials;
