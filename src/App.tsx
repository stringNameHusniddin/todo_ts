import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Modal from "./components/modal";
import {useState} from 'react'

export interface dataI {
  title : string
  id : string
}

function App(){
  const [toogle, setToogle] = useState<boolean>(false)
  const [data, setData] = useState<dataI[]>([])

  return (
    <div id="app" className="w-12/12 flex flex-col justify-center items-center bg-gray-50">
      <Modal toogle={toogle} setToogle={setToogle} data = {data} setData = {setData}/>
      <div className="w-10/12 bg-white flex-col shadow-2xl">
        <Header/>
        <Main data = {data} setData = {setData}/>
        <Footer setToogle={setToogle}/>
      </div>
    </div>
  );
}

export default App;
