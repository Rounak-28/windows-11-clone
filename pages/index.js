import Head from 'next/head'
import Image from 'next/image'
import Appbar from '../components/Appbar'
import Chrome from '../components/Chrome'
import Notepad from '../components/Notepad'
import Settings from '../components/Settings'
import Taskbar from '../components/Taskbar'
import store from '../zustand/store'

export default function Home() {

  let isSettingsOpened = store(state => state.settingsContext)
  let isChromeOpened = store(state => state.chromeContext)
  let isNotepadOpened = store(state => state.notepadContext)
  
  return(
    <div className="h-screen w-screen overflow-hidden text-white">
      <img src="/bg.jpg" alt="" />
      <Appbar />
      {isChromeOpened && <Chrome />}
      {isNotepadOpened && <Notepad />}
      {isSettingsOpened && <Settings />}
      <Taskbar />
    </div>
  )
}
