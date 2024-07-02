import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className='flexCenter mb-0 bg-orange-300/50 text-slate-600 w-[95%]'>
			<section className='flex flex-col py-10 justify-center items-center mx-auto'>
				<h1 className="flex w-full gap-y-3 border-b-slate-400">Diani Travel guide</h1>
				<div className='flex flex-row items-center mx-auto w-full'>
					<div className="flex flex-col justify-center mx-auto items-center p-4 w-[30%]">
						<h1 className="flex flex-col gap-y-3 m-4 p-4">About Us</h1>
						<p>Diani Beach Podcast is the ultra-shareable, uber-cool online guide to things to do in Diani Beach. Karibu Diani.</p>
					</div>
					<div className="flex flex-col justify-center mx-auto items-center w-[30%]">
						<h1 className="flex flex-col gap-y-3 m-4 p-4">Find Us</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi quibusdam magni veniam iste voluptas.</p>
					</div>
					<div className="flex flex-col justify-center mx-auto items-center w-[30%]">
						<h1>follow us</h1>
						<ul className="flex flex-col gap-3 m-4 p-4">
							<li><AiFillFacebook /></li>
							<li><AiFillInstagram /></li>
							<li><AiFillTwitterCircle /></li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
