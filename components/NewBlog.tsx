"use client"

import { BLOG_SECTION } from "@/constants"
import Image from "next/image"
import {bsFacebook } from "react-icons"

type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;
}
 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(
        <div className="flex flex-col items-center justify-center mx-auto w-full mb-6">
        {BLOG_SECTION.map((blog)=>(
          <div key={blog.title} className="flexCenter flex-col padding-container !px-20">
            <Image src={blog.src} alt={blog.alt} height={500} width={500} className="rounded-sm shadow-lg my-4"/>
            <h1 className="bold-20 py-3 my-4">{blog.title}</h1>
            <p>{blog.description}</p>
          </div>
        ))}
        </div>
  )
}

export default NewBlog