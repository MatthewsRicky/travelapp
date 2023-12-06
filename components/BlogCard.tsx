import { BLOG_SECTION } from "@/constants";
import Image from "next/image";
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
		<section className='grid my-10 w-[93%] md:grid-cols-2 lg:grid-cols-3 gap-8 max-container items-center blogs-bg p-4 border-none shadow-md rounded-lg'>
			<span>
				<p>BLOGS</p>
				<FaBlog />
			</span>
			<>
				{BLOG_SECTION.map((blog) => (
					<article
						key={blog.title}
						className='my-6 flex flex-col items-center justify-center'>
						<div>
							<Image
								src={blog.src}
								alt={blog.alt}
								width={1000}
								height={1000}
								className='rounded-md mb-6'
							/>
							<div>
								<h1 className='flex text-center text-md my-3 items'>
									{blog.title}
								</h1>
								<p>{blog.description}</p>
							</div>
						</div>
					</article>
				))}
			</>
		</section>
	);
};

export default BlogCard;
