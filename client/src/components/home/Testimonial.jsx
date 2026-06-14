import React from 'react'
import Title from './Title'
import { BookUser } from 'lucide-react'
const Testimonial = () => {
  return (  
      <div id ='testimonials'className="flex justify-center mb-10">
         <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border border-green-200 rounded-full px-6 py-1.5">
          <BookUserIcon size={16} weight="fill" className="size-4.5 stroke-green-600" />
          <span>Testimonials</span>
        </div>
<Title title="Dont justr take our words" description="Hear what our users says about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review!"/>
    </div>
  )
}

export default Testimonial
