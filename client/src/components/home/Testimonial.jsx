import React from 'react'
import Title from './Title'
const Testimonial = () => {
  return (  
      <div id ='testimonials'className="flex justify-center mb-10">
         <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border border-green-200 rounded-full px-6 py-1.5">
          <BookUserIcon size={16} weight="fill" className="text-green-700" />
          <span>Simple Process</span>
        </div>
<Title title='Build your resume' description='Create a professional resume in minutes with our easy-to-use builder.'/>
    </div>
  )
}

export default Testimonial
