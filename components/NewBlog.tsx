"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { BLOG_SECTION } from "@/constants"
import Image from "next/image"
import {} from "react-icons"

type blogItems = {
  src: string;
  alt: string;
  title: string;
  description: string;
}
 
const NewBlog = ({src, alt, title, description}: blogItems) => {
  return(

      
        <div className="">
        {BLOG_SECTION.map((blog)=>(
          <div key={blog.title}>
            
            <Image src={blog.src} alt={blog.alt} />
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>

            
          </div>

        
        ))}
        </div>


  )
}

export default NewBlog