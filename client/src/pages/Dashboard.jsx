import { CloudArrowUp, Plus, FileText, Trash, Pencil } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'

const Dashboard = () => {
  const color = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState([false])
  const [showUploadResume, setShowUploadResume] = useState([false])

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData)
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent sm:hidden'>
          Welcome, Bibek Maharjan
        </p>
        <div className='flex gap-4'>
          
          <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center
          rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 
          cursor-pointer'>
            <Plus className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full'/>
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>
              Create Resume
            </p>
          </button>
                    
          <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center
          rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 
          cursor-pointer'>
            <CloudArrowUp className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-purple-500 text-white rounded-full'/>
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>
             Upload Existing
            </p>
          </button>

        </div>
        <hr className='border-slate-300 my-6 sm:w-[305px] '/>
        <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
          {allResumes.map((resume, index) => {
            const baseColor = color[index % color.length];
            return (
              <button key={index} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg
              transition-all duration-300 cursor-pointer' style={{
                background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                borderColor: baseColor + '40'
              }}>
                <FileText className="size-7 group-hover:scale-105 transition-all mb-1"
                  style={{ color: baseColor }} />
                
                {/* Fixed class string syntax & separated style tag */}
                <p className='text-sm font-medium group-hover:scale-105 transition-all px-2 text-center' style={{ color: baseColor }}>
                  {resume.title}
                </p>
                
                {/* Fixed "absolute" typo & added execution parentheses () to method */}
                <p className='absolute bottom-2 text-[10px] text-slate-400 group-hover:text-slate-600 transition-all duration-300 px-2 text-center'>
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
                
                {/* Fixed "absolute" typo & Icon names */}
                <div className='absolute top-2 right-2 group-hover:flex items-center gap-0.5 hidden bg-white/80 backdrop-blur-sm rounded shadow-sm p-0.5'>
                  <Pencil className='size-6 p-1 hover:bg-slate-100 rounded text-slate-700 transition-colors'/>
                  <Trash className='size-6 p-1 hover:bg-red-50 hover:text-red-600 rounded text-slate-700 transition-colors'/>
                </div>
              </button>
            )
          })}

        </div>
        {showCreateResume && (
          <form action>

          </form>
        )}
      </div>
    </div>
  )
}

export default Dashboard