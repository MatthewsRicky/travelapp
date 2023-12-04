import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
	return (
		<section>
			<BlogCard
				src='/sarova-stanley-thai-chi-restaurant-9.webp'
				alt='Sarova Stanely'
				title='Dine Out at these New Diani Hotspots'
				description='February is technically the first month, so congratulations: you’ve pretty much survived another nJaanuary (*ask a Kenyan the meaning of this) in Diani. To make it go by quicker, here are some new tasty gourmet spots in town to check out.'
			/>
		</section>
	);
};

export default Blogs;
