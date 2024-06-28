"use client"

import { BLOG_SECTION } from "@/constants"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;

}


 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(
        <div className="flex flex-col items-center justify-center mx-auto w-full bg-gradient-to-b from-orange-50/50 to-orange-200/50 text-slate-900 tracking-wide">
          <div className="my-20">
            <h1 className="flex items-center mx-auto justify-center w-full uppercase bold-20 border-b-1 border-solid !md:px-20 my-4">blog</h1>
              {BLOG_SECTION.map((blog)=>(
                <div key={blog.title} className="flexCenter flex-col md:padding-container mb-6">
                  <div className="flexStart gap-x-4 items-center">
                    
                      <AiFillStar className="w-6 h-5 text-slate-900 drop-shadow-lg drop-shadow-sky-800 p-6 border-neutral-700-solid" />
                  
                    <h2 className="bold-20 py-3 my-4">{blog.title}</h2>
                  </div>
                  
                  <Image src={blog.src} alt={blog.alt} height={500} width={500} className="rounded-sm shadow-lg w-full my-4"/>
                  
                  <p className="tracking-wide px-12 text-md font-normal">{blog.description}</p>
                </div>
              ))}
          </div>
          
        </div>
  )
}

export default NewBlog