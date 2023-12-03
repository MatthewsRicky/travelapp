import Image from "next/image";
import React from "react";

const BlogCard = (
	title: string,
	description: string,
	src: string,
	alt: string,
	width: number,
	height: number
) => {
	return (
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
	);
};

export default BlogCard;
