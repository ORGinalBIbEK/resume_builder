import { PlusIcon } from '@phosphor-icons/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent sm:hidden'>
          Welcome, Bibek Maharjan
        </p>
        <div className='flex gap-4'>
          <button>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-bt from indigo-300 to-indigo-500 text-white rounded-full'/>
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>
              Create Resume
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard