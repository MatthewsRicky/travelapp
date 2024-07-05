"use client"

import { BLOG_SECTION } from "@/constants"
import Image from "next/image"
import Link from "next/link"
type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;

} 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(
        <div className="flex flex-col items-center justify-center mx-auto w-[95%] bg-white text-slate-900 tracking-wide">
          <div className="my-20">
            <h1 className="flex items-center justify-center w-full uppercase bold-20 border-b-1 border-solid my-4">blog</h1>
              {BLOG_SECTION.map((blog)=>(
                <div key={blog.title} className="flexCenter md:padding-container shadow-md shadow-orange-900/30 gap-4 p-4 mb-6">
                  <Image src={blog.src} alt={blog.alt} height={500} width={500} className="rounded-md shadow-lg w-full max-w-[50%] my-4"/>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col items-center gap-3"> 
                      <h2 className="medium-48 mx-auto flexCenter uppercase gap-2 text-center px-2 py-3 my-4">{blog.title}</h2>
                      <p className="tracking-wide mx-2 py-4 px-12 medium-20 shadow-sm shadow-orange-900/30">{blog.description}
                      <Link
											href='/'
											className='text-orange-500 hover:underline'>
											<p>...Continue Reading</p>
										</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
        </div>
  )
}

export default NewBlog