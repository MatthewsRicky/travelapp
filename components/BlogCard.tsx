import { BLOG_SECTION } from "@/constants";
import Image from "next/image";
import React from "react";

type blogItems = {
	src: string;
	alt: string;
	title: string;
	description: string;
};

const BlogCard = ({ src, alt, title, description }: blogItems) => {
	return (
		<div className='grid my-10 w-[93%] sm:grid-cols-2 lg:grid-cols-3 gap-8 max-container items-center '>
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
		</div>
	);
};

export default BlogCard;
