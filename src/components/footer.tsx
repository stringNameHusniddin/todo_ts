import React, { FC } from 'react'
import { GrFormAdd } from 'react-icons/gr'

interface footerProps {
    setToogle : React.Dispatch<React.SetStateAction<boolean>>
}

const Footer : FC<footerProps> = ({setToogle}) => {
    return (
        <div className='border-t-2 h-[60px] flex justify-between items-center px-10'>
            <p>Egamberdiyev Husniddin</p>
            <div onClick={()=>setToogle(true)} className='flex justify-center rounded gap-1 cursor-pointer hover:bg-gray-200 p-2 w-[150px]'>
                <GrFormAdd className='text-[24px]' />
                Add task
            </div>
        </div>
    )
}

export default Footer