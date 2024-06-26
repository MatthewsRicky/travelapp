import { BLOG_SECTION } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBlog } from "react-icons/fa";

type blogItems = {
	src: string;
	alt: string;
	title: string;
	description: string;
};

const BlogCard = ({ src, alt, title, description }: blogItems) => {
	return (
		<section className=" max">
			<header className='flexCenter w-full my-8'>
				<span className='flex items-center justify-center gap-3'>
					<FaBlog />
					<p className='text-xl font-bold uppercase'>Articles</p>
				</span>
			</header>
			<div className='max-w-[1440px]'>
				<div className="flexCenter flex-col items-center w-full">
					{BLOG_SECTION.map((blog) => (
						<article
							key={blog.title}
							className='my-6 flexCenter'>
							<div className="flexCenter flex-col medium-14">
								<Image
									src={blog.src}
									alt={blog.alt}
									width={1000}
									height={1000}
									className='rounded-md mb-6'
								/>
								<div className='border-b-orange-300 border-opacity-30 shadow-sm border-b-2'>
									<h1 className='bold-32 px-2 py-3 shadow-sm rounded-md shadow-orange-300  flex text-center text-md my-3 items'>
										{blog.title}
									</h1>
									<h2 className='mb-4 p-4 text-center'>
										{blog.description}
										<Link
											href='/'
											className='text-orange-500 hover:underline'>
											<p>...Continue Reading</p>
										</Link>
									</h2>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogCard;
