"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { BLOG_SECTION } from "@/constants"

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
        {BLOG_SECTION.map((blog)=>(
          <div></div>
        ))}
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default NewBlog