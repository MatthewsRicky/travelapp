"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
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
    <VerticalTimeline>
      <VerticalTimelineElement>
        <div className="">
        {BLOG_SECTION.map((blog)=>(
          <div key={blog.title}>
            <Image src={blog.src} alt="" />
            <h1>{blog.title}</h1>
          </div>

        
        ))}
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default NewBlog