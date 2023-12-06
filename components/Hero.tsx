"use client";

import Image from "next/image";
import Button from "./Button";
const Hero = () => {
	return (
		<section className='relative z-100 max-container video-background p flex flex-col justify-center items-center gap-6 py-10'>
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
				<div className='justify-around items-center relative mx-auto flex z-20 sm:w-[85%] flex-col sm:flex-row gap-4 px-3 py-3 rounded-lg shadow-2xl'>
					<div className=' flex w-[80%] mx-auto z-20'>
						<Image
							src='/libosso_profile.webp'
							alt='Libosso'
							width={300}
							height={250}
							className='rounded-md drop-shadow-lg shadow-blue-950'
						/>
					</div>
					<div className='flex flex-col gap-4 w-full justify-center mx-auto mt-10 items-center sm:w-[40%]'>
						<h1>Diani Beach Podcast</h1>
						<p className='bold-24 px-2 py-4 rounded-lg mt-2 sm:mt-6 text-center bg-blue-700/80 text-blue-200 shadow-lg xl:max-w-[720px]'>
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
