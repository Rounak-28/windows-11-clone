import Head from 'next/head'
import Image from 'next/image'
import Appbar from '../components/Appbar'
import Taskbar from '../components/Taskbar'

export default function Home() {
  return(
    <div className="h-screen w-screen overflow-hidden text-white">
      <img src="/bg.jpg" alt="" />
      <Appbar />
      <Taskbar />
    </div>
  )
}
