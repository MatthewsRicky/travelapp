import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flexCenter mb-24'>
			<section className='flex flex-col justify-center items-center mx-auto'>
				<h1>Diani Travel guide</h1>
				<div>
					<div>About Us</div>
					<div>Find Us</div>
					<div>Follow Us</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
