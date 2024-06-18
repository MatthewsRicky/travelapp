"use client";

import Image from "next/image";
import Button from "./Button";
const Hero = () => {
	return (
		<section className='relative z-100 max-container space-y-6 flex flex-col justify-center items-center gap-4 mt-16'>
			<div className='relative flex flex-col mt-4'>
				<div className='justify-around w-[60%] items-center relative mx-auto flex z-20 sm:w-[85%] flex-col sm:flex-col gap-4 px-3 py-3 rounded-lg shadow-2xl backdrop-blur-sm'>
					<div className='hidden sm:flex z-20 mt-4'>
						<Image
							src='/libosso_profile.webp'
							alt='Libosso'
							width={250}
							height={250}
							className='rounded-full drop-shadow-lg shadow-blue-950'
						/>
					</div>
					<div className='flex flex-col gap-4 w-full justify-center mx-auto mt-10 items-center sm:w-[40%]'>
						<h1 className=' backdrop-blur-xs text-slate-100 bg-orange-600/80 text-center uppercase font-bold text-xl md:text-2xl p-4 rounded-md'>
							Diani Beach Podcast
						</h1>
						<p className='bold-24 backdrop-blur-md px-2 py-4 rounded-lg mt-2 sm:mt-6 text-center bg-blue-800/60 text-blue-200 shadow-lg xl:max-w-[720px]'>
							" Diani Beach Podcast is the ultra-shareable, uber-cool online
							guide to things to do in Diani Beach. "
						</p>
						<p className='backdrop-blur-md text-md font-semibold p-3 mb-2 shadow-lg text-white rounded-md bg-blue-300/50 text-center'>
							Vincent Embukane Liboso
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
