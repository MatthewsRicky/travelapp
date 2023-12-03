"use client";

import Image from "next/image";
import Button from "./Button";
const Hero = () => {
	return (
		<section className='max-container video-background padding-container flex flex-col gap-8 py-10'>
			<video
				autoPlay
				loop
				muted>
				<source
					src='herovid.mp4'
					type='video/mp4'
				/>
			</video>
			<h1 className='w-[30%] mx-auto flex justify-center items-center relative z-20 bold-32 lg:bold-52 lg:w-[30%] lg:mx-auto my-4 px-4 py-6 rounded-md mt-2 text-center bg-blue-700/70 text-blue-200 shadow-lg'>
				Diani Beach Podcast
			</h1>

			<div className='relative z-20 flex flex-shrink gap-6 flex-col sm:flex-row items-center mb-20 justify-around'>
				<div className='relative flex flex-col'>
					<div className='justify-between items-center relative bg-blue-100/10 flex z-20 w-full fle flex-row gap-8 px-7 py-3 shadow-2xl'>
						<div className='relative flex flex-col z-20 shadow-lg w-[50%] rounded-lg'>
							<Image
								src='/libosso_profile.webp'
								alt='Libosso'
								width={250}
								height={250}
								className='rounded-md drop-shadow-lg shadow-blue-950'
							/>
						</div>
						<div className='flex flex-col gap-4 w-[40%]'>
							<p className='bold-24 px-4 py-6 rounded-md mt-6 text-center bg-blue-700/80 text-blue-200 shadow-lg xl:max-w-[520px]'>
								Diani Beach Podcast is the ultra-shareable, uber-cool online
								guide to things to do in Diani Beach.
							</p>
							<p className='text-md font-semibold p-3 shadow-lg text-blue-900 rounded-md bg-blue-300/50 text-center'>
								Vincent Embukane Liboso
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
