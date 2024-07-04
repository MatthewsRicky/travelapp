"use client"

import React from 'react'
import { BLOG_SECTION } from '@/constants'

const UploadModal = ({title, description, src, alt}: any) => {
  return (
    <div className='flex gap-3 flex-col w-full mx-auto text-slate-100 bg-slate-900'>
      <input type="text" name="title" id={title} />
      <input type="text" name="description" id={description} />
      <input type="image" src={src} alt={alt} />
    </div>
  )
}

export default UploadModal