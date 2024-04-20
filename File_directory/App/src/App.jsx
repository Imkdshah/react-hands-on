import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'

function App() {
  const [data, setData] = useState(explorer)

  console.log(data);
  return (
   <div className='App'>
      <Folder data={data}/> 
   </div>
   
  )
}

export default App
