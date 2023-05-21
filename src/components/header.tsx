import React, { FC } from 'react'

const Header : FC = () => {
  return (
    <div className='w-full'>
        <div className='bg-orange-400 w-full h-[5px] rounded-tr-md rounded-tl-md'></div>
        <div className='w-full flex items-center h-[60px] px-10 border-0  border-b-2'>
            <p>Todo App</p>
        </div>
    </div>
  )
}

export default Header