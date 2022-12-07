import { BsBatteryFull, BsVolumeMute } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import Menu from "./Menu";
import WifiBluetoothMenu from "./WifiBluetoothMenu";
import store from "../zustand/store";

const Taskbar = () => {

  const showMenuFunc = store(state => state.changeMenuContext);
  const showWifiBtMenuFunc = store(state => state.changeWifiBtMenuContext);


  let isMenuOpened = store(state => state.menuContext)
  let isWifiBtMenuOpened = store(state => state.wifiBMenuContext)

  let isSettingsOpened = store(state => state.settingsContext)
  let isChromeOpened = store(state => state.chromeContext)
  let isNotepadOpened = store(state => state.notepadContext)

  return (
    <>
      {isMenuOpened && <Menu />}
      {isWifiBtMenuOpened && <WifiBluetoothMenu />}
      <div className="w-screen overflow-hidden backdrop-blur-md h-10 absolute bottom-0 flex justify-center items-center space-x-5">
        <img
          src="/icons/w11.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
          onClick={showMenuFunc}
        />
        <div className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]">
          <img
            src="/icons/file-manager.svg"
            className=""
            alt=""
          />
          {/* <div className="mx-auto mt-[2px] w-[80%] bg-[#4cc2ff] h-[4px] rounded-sm"></div> */}
        </div>
        <div className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]">
          <img
            src="/icons/settings.svg"
            className=""
            alt=""
            onClick={store(state => state.changeSettingsContext)}
          />

          {isSettingsOpened && <div className="mx-auto mt-[2px] w-[80%] bg-[#4cc2ff] h-[4px] rounded-sm"></div>}
        </div>
        <div className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
        >
          <img
            src="/icons/google-chrome.svg"
            className=""
            alt=""
            onClick={store(state => state.changeChromeContext)}
          />
          {isChromeOpened && <div className="mx-auto mt-[2px] w-[80%] bg-[#4cc2ff] h-[4px] rounded-sm"></div>}
        </div>
        <div className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]">
          <img
            src="/icons/visualstudiocode.svg"
            className=""
            alt=""
          />
          {/* <div className="mx-auto mt-[2px] w-[80%] bg-[#4cc2ff] h-[4px] rounded-sm"></div> */}
        </div>
        <div className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]">
          <img
            src="/icons/notepad.svg"
            className=""
            alt=""
            onClick={store(state => state.changeNotepadContext)}
          />
          {isNotepadOpened && <div className="mx-auto mt-[2px] w-[80%] bg-[#4cc2ff] h-[4px] rounded-sm"></div>}
        </div>
        <div className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]">
          <img
            src="/icons/recycle-bin.png"
            className=""
            alt=""
          />
          {/* <div className="mx-auto mt-[2px] w-[80%] bg-[#4cc2ff] h-[4px] rounded-sm"></div> */}
        </div>

        <div className="rightSideMenu w-48 px-4 h-full flex justify-between absolute right-0">
          <div
            className="icons space-x-2 flex h-full items-center text-xl px-3 rounded hover:bg-[#ffffff28]"
            onClick={showWifiBtMenuFunc}
          >
            <AiOutlineWifi className="text-white" />
            <BsVolumeMute className="text-white" />
            <BsBatteryFull className="text-white" />
          </div>
          <div className="time text-[10px] text-white text-right">
            <p>21:15</p>
            <p>15-11-2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
