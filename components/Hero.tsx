"use client";

import Image from "next/image";
import Button from "./Button";
const Hero = () => {
	return (
		<section className='max-container video-background padding-container flex flex-col lg:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20 overflow-y-scroll'>
			<video
				autoPlay
				loop
				muted>
				<source
					src='herovid.mp4'
					type='video/mp4'
				/>
			</video>
			<h1 className='relative z-20 bold-52 lg:bold-88 lg:w-[50%] lg:mx-auto my-auto px-4 py-6 rounded-md mt-6 text-center bg-blue-700/70 text-blue-200 shadow-lg'>
				Diani Beach Podcast
			</h1>

			<div className='h-[80vh] relative z-20 flex flex-col gap-6 sm:flex-row lg:flex-col items-center justify-between xl:w-1/2'>
				<div className='relative flex flex-col z-20'>
					<Image
						src='/libosso_profile.webp'
						alt='Libosso'
						width={200}
						height={200}
						className='shadow-lg rounded-full'
					/>
				</div>
				<div className='relative flex flex-col bg-blue-200/40'>
					<div className='justify-between items-center relative flex z-20 w-72 flex-col gap-8 px-7 py-3 shadow-2xl'>
						<p className='bold-24 px-4 py-6 rounded-md mt-6 text-center bg-blue-700/70 text-blue-200 shadow-lg xl:max-w-[520px]'>
							Diani Beach Podcast is the ultra-shareable, uber-cool online guide
							to things to do in Diani Beach.
						</p>

						<p className='text-lg font-semibold text-blue-800'>
							Contributor: Vincent Embukane Liboso
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
