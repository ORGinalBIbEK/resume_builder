import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const user={name:'Bibek Maharjan'}
  return (
    <div className='shadow bg-white'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all
        '></nav>
      <Link to='/'>
        <img src="/logo.svg" alt='logo' className='h-11 w-auto'/>
      </Link>
      <div>
        <P>Hi,{user?.name}</P>
        <button></button>
      </div>
    </div>
  )
}

export default Navbar
