import { BLOG_SECTION } from "@/constants";
import Image from "next/image";
import React from "react";

const BlogCard = () => {
	return (
		<div>
			{BLOG_SECTION.map((blog) => (
				<div>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
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
