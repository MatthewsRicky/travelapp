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
		<div>
			{BLOG_SECTION.map((blog) => (
				<div>
					<Image
						src={src}
						alt={alt}
						width={1000}
						height={1000}
					/>
					<div>
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogCard;
