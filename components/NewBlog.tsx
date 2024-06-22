"use client"

import { BLOG_SECTION } from "@/constants"
import Image from "next/image"
import { AiFillAccountBook } from "react-icons/ai"

type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;
}
 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(
        <div className="flex flex-col items-center justify-center mx-auto w-full my-20 bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b from-[#000814] to-[#000] dark:text-slate-100">
          <h1 className="uppercase bold-20 border-b-1 border-solid my-4">blog</h1>
        {BLOG_SECTION.map((blog)=>(
          <div key={blog.title} className="flexCenter flex-col md:padding-container !md:px-20 mb-6">
            <div className="flexStart gap-4 items-center">
              <div>
                <AiFillAccountBook className="w-8 h-8 text-orange-400 shadow-sm rounded-sm p-2 border-1-solid shadow-orange-400" />
              </div>
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