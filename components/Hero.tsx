"use client";

import Image from "next/image";

const Hero = () => {
	return (
		<section className='max-container padding-container flex md:flex-row flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
			<div className='w-[50vw]'>
				<Image
					src='/libosso_profile.webp'
					alt='camp'
					width={50o}
					height={500}
					className='w-10 lg:w-[50px]'
				/>
			</div>
			<div className='relative z-20 flex flex-col flex-1 xl:w-1/2'>
				<h1 className='bold-52 lg:bold-88'>Diani Beach Podcast</h1>

				<div className='relative flex flex-1 items-start'>
					<div className='relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 shadow-2xl'>
						<p className='bold-32 mt-6 text-gray-30 xl:max-w-[520px]'>
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
