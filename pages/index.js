import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Appbar from '../components/Appbar'
import Chrome from '../components/Chrome'
import Taskbar from '../components/Taskbar'

export default function Home() {

  const [showChrome, setShowChrome] = useState(false)

  const openChrome = () =>{
    showChrome ? setShowChrome(false) : setShowChrome(true)
  }

  
  return(
    <div className="h-screen w-screen overflow-hidden text-white">
      <img src="/bg.jpg" alt="" />
      <Appbar />
      {showChrome && <Chrome/>}
      <Taskbar  openChrome={openChrome}/>
    </div>
  )
}
