import React from "react";

const CreateBlogPost = () => {
	return (
		<div>
			<form action='{addBlog}'>
				<input
					type='text'
					name='title'
					id='title'
				/>
				<input
					type='text'
					name='content'
					id='content'
				/>
				<input
					type='image'
					src=''
					alt=''
				/>
			</form>
		</div>
	);
};

export default CreateBlogPost;
