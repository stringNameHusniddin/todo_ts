import { FC } from 'react'
import { dataI } from '../App'

interface mainProps {
    data: dataI[]
    setData: React.Dispatch<React.SetStateAction<dataI[]>>
}

const Main: FC<mainProps> = ({ data, setData }) => {

    const removeData = (id:string):void=>{
        const newData:dataI[] = data.filter(mal => mal.id !== id)
        setData(newData)
    }

    return (
        <div className="flex flex-col items-center w-full min-h-[100px] justify-around py-5">
            {
                data.map(mal => (
                    <div key={mal.id} onClick={()=>removeData(mal.id)} className="w-11/12 p-5 rounded hover:bg-gray-200 cursor-pointer">
                        <p>{mal.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Main