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
		<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-container items-center '>
			{BLOG_SECTION.map((blog) => (
				<div key={blog.title}>
					<div>
						<Image
							src={blog.src}
							alt={blog.alt}
							width={1000}
							height={1000}
						/>
						<div>
							<h1>{blog.title}</h1>
							<p>{blog.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogCard;
