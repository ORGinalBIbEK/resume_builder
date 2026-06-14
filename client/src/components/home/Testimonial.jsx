import React from 'react'
import Title from './Title'
import { BookOpenUser } from '@phosphor-icons/react' // Note: Phosphor usually drops 'Icon' from the component name

const Testimonial = () => {
  return (  
    // 1. Stacks items vertically (flex-col), centers them horizontally, and adds spacing (gap-3)
    <div id='testimonials' className="flex flex-col items-center justify-center mb-16 px-4 text-center">
      
      {/* 2. Compact, perfectly centered badge */}
      <div className="flex items-center gap-1.5 text-xs font-medium text-green-800 bg-green-400/10 border border-green-200/60 rounded-full px-4 py-1 mb-3">
        {/* Made the icon a crisp, small size */}
        <BookOpenUser size={14} weight="fill" className="text-green-700" />
        <span>Testimonials</span>
      </div>

      {/* 3. Title Component */}
      <Title 
        title="Don't just take our word for it" 
        description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review!"
      />
    </div>
  )
}

export default Testimonial