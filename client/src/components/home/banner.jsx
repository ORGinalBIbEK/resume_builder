import React from 'react'

const Banner = () => {
  return (
    /* Changed justify-between to justify-center, and added gap-2 */
    <div className="flex flex-wrap items-center justify-center gap-2 w-full px-4 md:px-14 py-4 font-medium text-sm text-black text-center bg-gradient-to-r from-violet-500 to-purple-100">
        <p>New AI Feature Added</p>
        
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.91797 7H11.0846" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 2.9165L11.0833 6.99984L7 11.0832" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default Banner