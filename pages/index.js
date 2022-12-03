import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Appbar from '../components/Appbar'
import Chrome from '../components/Chrome'
import Notepad from '../components/Notepad'
import Settings from '../components/Settings'
import Taskbar from '../components/Taskbar'

export default function Home() {

  const [showChrome, setShowChrome] = useState(false)
  const [showNotepad, setShowNotepad] = useState(false)
  const [showSettings, setShowSettings] = useState(false)


  const openChrome = () =>{
    setShowNotepad(false)
    setShowSettings(false)
    showChrome ? setShowChrome(false) : setShowChrome(true)
  }

  const openNotepad = () =>{
    setShowChrome(false)
    setShowSettings(false)
    showNotepad ? setShowNotepad(false) : setShowNotepad(true)
  }

  const openSettings = () =>{
    setShowChrome(false)
    setShowNotepad(false)
    showSettings ? setShowSettings(false) : setShowSettings(true)
  }

  
  return(
    <div className="h-screen w-screen overflow-hidden text-white">
      <img src="/bg.jpg" alt="" />
      <Appbar />
      {showChrome && <Chrome setShowChrome={setShowChrome} />}
      {showNotepad && <Notepad setShowNotepad={setShowNotepad} />}
      {showSettings && <Settings setShowSettings={setShowSettings}/>}
      <Taskbar 
      openChrome={openChrome} showChrome={showChrome} 
      openNotepad={openNotepad} showNotepad={showNotepad} 
      openSettings={openSettings} showSettings={showSettings}
       />
    </div>
  )
}
