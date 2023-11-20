import Image from "next/image";
import React from "react";

const Guide = () => {
	return (
		<section className='flexCenter flex-col'>
			<div className='padding-container max-container w-full pb-24'>
				<Image
					src='/camp.svg'
					alt='camp'
					width={50}
					height={50}
				/>
				<p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
					We are here for you
				</p>
				<div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
					<h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
						Guide You To Easy Path
					</h2>
					<p className='regular-16 text-gray-30 xl:max-w-[520px]'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
						saepe id laborum sequi enim facilis sint, reprehenderit repudiandae
						odio at assumenda dicta animi maiores quo? Accusantium tempore illo
						atque asperiores blanditiis placeat quae corrupti, vitae ex, maxime,
						eveniet similique. Eius quaerat animi placeat debitis non repellat,
						ullam corrupti exercitationem accusantium?
					</p>
				</div>
			</div>

			<div className='flexCenter max-container relative w-full border-2 border-blue-700'>
				<Image
					src='/boat.png'
					alt='boat'
					width={1440}
					height={580}
					className='w-full object-center 2xl:rounded-5xl'
				/>
				<div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
					<div className='flexBetween flex-col'>
						<div className='flex flex-col w-full'>
							<div className='flexBetween w-full'>
								<p>Destination</p>
								<p>48 mins</p>
							</div>
							<p>Kongo River</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Guide;
