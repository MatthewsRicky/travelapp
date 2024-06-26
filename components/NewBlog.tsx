"use client"

import { BLOG_SECTION } from "@/constants"
import Image from "next/image"
import { AiFillAccountBook } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"

type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;

}


 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(
        <div className="flex flex-col items-center justify-center mx-auto w-full my-20 bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b from-cyan-900 to-cyan-950 dark:text-orange-100">
          <h1 className="uppercase bold-20 border-b-1 border-solid !md:px-20 my-4">blog</h1>
        {BLOG_SECTION.map((blog)=>(
          <div key={blog.title} className="flexCenter flex-col md:padding-container mb-6">
            <div className="flexStart gap-x-4 items-center">
              <span className="flex p-4 items-center">
                <BsBookmarkFill />
              </span>
              <h2 className="bold-20 py-3 my-4">{blog.title}</h2>
            </div>
            
            <Image src={blog.src} alt={blog.alt} height={500} width={500} className="rounded-sm shadow-lg my-4"/>
            
            <p>{blog.description}</p>
          </div>
        ))}
        </div>
  )
}

export default NewBlog