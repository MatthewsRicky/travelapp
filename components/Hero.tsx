"use client";

import Image from "next/image";
import Button from "./Button";
const Hero = () => {
	return (
		<section className='max-container video-background padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20'>
			<video
				autoPlay
				loop
				muted>
				<source
					src='herovid.mp4'
					type='video/mp4'
				/>
			</video>
			<h1 className='relative z-20 bold-52 lg:bold-88 lg:w-[50%] lg:mx-auto px-4 py-6 rounded-md mt-6 text-center bg-blue-700/70 text-blue-200 shadow-lg'>
				Diani Beach Podcast
			</h1>

			<div className='relative z-20 flex flex-1 xl:w-1/2'>
				<div className='relative flex flex-col z-20 w-[50vw]'>
					<Image
						src='/libosso_profile.webp'
						alt='Libosso'
						width={300}
						height={300}
						className='shadow-lg rounded-full'
					/>
					<span>
						<p className='bold-32'>Contributor: Vincent Embukane Liboso</p>
					</span>
				</div>
				<div className='relative flex flex-1 items-start'>
					<div className='relative flex z-20 w-[268px] flex-col gap-8  px-7 py-8 shadow-2xl'>
						<p className='bold-32 px-4 py-6 rounded-md mt-6 text-center bg-blue-700/70 text-blue-200 shadow-lg xl:max-w-[520px]'>
							Diani Beach Podcast is the ultra-shareable, uber-cool online guide
							to things to do in Diani Beach.
						</p>

						<div className='my-11 flex flex-wrap gap-5'>
							<div className='flex items-center gap-2'>
								{Array(5)
									.fill(1)
									.map((_, index) => (
										<Image
											src='/star.svg'
											alt='star'
											width={24}
											height={24}
										/>
									))}
							</div>
							<p className='bold-16 lg:bold-20 text-blue-70'>
								198k
								<span className='regular-16 lg:regular-20 ml-1 underline'>
									Excellent Reviews
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
