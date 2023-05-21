import { FC, useState } from 'react'
import { dataI } from '../App';
import { v4 } from 'uuid';

export interface modalProps {
    toogle?: boolean;
    setToogle: React.Dispatch<React.SetStateAction<boolean>>
    data: dataI[]
    setData: React.Dispatch<React.SetStateAction<dataI[]>>
}


const Modal: FC<modalProps> = ({ toogle, setToogle, data, setData }) => {

    const [title, setTitle] = useState<string>('')

    const addData = () => {
        if (title.length > 0) {
            setData([...data, { title: title, id: v4() }])
            setToogle(false)
            setTitle('')
        }
    }


    return (
        <>
            {
                toogle ? <div className='w-full flex items-center justify-center h-full fixed bg-rgba'>
                    <div className='w-5/12 flex flex-col items-center rounded-md justify-around bg-white shadow-md h-[150px]'>
                        <input onChange={e => setTitle(e.target.value)} className='border-2 w-11/12 h-[40px] px-2 rounded focus:outline-none' type="text" placeholder='Enter your task' />
                        <div className='flex w-8/12 justify-around'>
                            <button onClick={() => setToogle(false)} className='p-3 bg-red-600 text-white rounded-md focus:opacity-50 transition-all duration-300'>Cancel</button>
                            <button onClick={addData} className='p-3 bg-green-600 text-white rounded-md focus:opacity-50 transition-all duration-300'>Add</button>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Modal