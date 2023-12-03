"use client";

import Image from "next/image";
import Button from "./Button";
const Hero = () => {
	return (
		<section className='relative z-100 max-container video-background padding-container flex flex-col gap-6 py-10'>
			<video
				autoPlay
				loop
				muted>
				<source
					src='herovid.mp4'
					type='video/mp4'
				/>
			</video>

			<div className='relative flex flex-col'>
				<h1 className='uppercase w-[50%] mx-auto flex justify-center items-center relative z-20 md:bold-20 lg:bold-32 lg:w-[60%] lg:mx-auto my-4 px-4 py-6 rounded-md mt-2 text-center bg-blue-700/70 text-blue-200 shadow-lg'>
					Diani Beach Podcast
				</h1>
				<div className='justify-around items-center relative mx-auto bg-blue-100/20 flex z-20 sm:w-[85%] flex-col sm:flex-row gap-4 px-3 py-3 shadow-2xl'>
					<div className=' flex  flex-col z-20'>
						<Image
							src='/libosso_profile.webp'
							alt='Libosso'
							width={250}
							height={250}
							className='rounded-md drop-shadow-lg shadow-blue-950'
						/>
					</div>
					<div className='flex flex-row-reverse sm:flex-col gap-4 w-full items-center sm:w-[40%]'>
						<p className='bold-24 px-2 py-4 rounded-md mt-2 sm:mt-6 text-center bg-blue-700/80 text-blue-200 shadow-lg xl:max-w-[720px]'>
							Diani Beach Podcast is the ultra-shareable, uber-cool online guide
							to things to do in Diani Beach.
						</p>
						<p className='text-md font-semibold p-3 mb-2 shadow-lg text-blue-900 rounded-md bg-blue-300/50 text-center'>
							Vincent Embukane Liboso
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
