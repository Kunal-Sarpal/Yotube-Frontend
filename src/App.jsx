
import Navbar from './components/Navbar'
import VideoGrid from './components/VideoGrid'
import SideNav from './components/SideNav'
import { useState } from 'react'
import { CreateContext } from './context'


function App() {
  const [isTrue, setTrue] = useState(CreateContext);
  return (
    <div className='bg-zinc-900 h-fit flex'>
     <CreateContext.Provider value={{ isTrue, setTrue }}>
     <SideNav />
      <Navbar/>
      <VideoGrid/>
  
     </CreateContext.Provider>
    </div>
  )
}

export default App