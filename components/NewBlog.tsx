"use client"

import { BLOG_SECTION } from "@/constants"
import Image from "next/image"

type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;

} 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(
        <div className="flex flex-col items-center justify-center mx-auto w-full bg-white text-slate-900 tracking-wide">
          <div className="my-20">
            <h1 className="flex items-center justify-center w-full uppercase bold-20 border-b-1  border-solid my-4">blog</h1>
              {BLOG_SECTION.map((blog)=>(
                <div key={blog.title} className="flexCenter md:padding-container mb-6">
                  <Image src={blog.src} alt={blog.alt} height={500} width={500} className="rounded-md shadow-lg w-full max-w-[50%] my-4"/>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col items-center gap-3"> 
                      <h2 className="medium-48 mx-auto flexCenter uppercase text-center px-2 py-3 my-4">{blog.title}</h2>
                      <p className="tracking-wide px-12 medium-20">{blog.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
        </div>
  )
}

export default NewBlog