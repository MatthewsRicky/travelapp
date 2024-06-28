import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flexCenter gap-y-6 mb-0 bg-blue-950 text-slate-100 mb-24'>
			<section className='flex flex-col py-10 justify-center items-center mx-auto'>
				<h1>Diani Travel guide</h1>
				<div className='flex gap-8 justify-between w-full'>
					<div>
						<h1>About Us</h1>
						<p>Diani Beach Podcast is the ultra-shareable, uber-cool online guide to things to do in Diani Beach. Karibu Diani.</p>
					</div>
					<div>Find Us</div>
					<div>Follow Us</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
