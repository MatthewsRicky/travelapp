"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { BLOG_SECTION } from "@/constants"

type blogItems = {}
 
const NewBlog = () => {
  return(
    <VerticalTimeline>
      <VerticalTimelineElement>
        {BLOG_SECTION.map(()=>())}
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default NewBlog