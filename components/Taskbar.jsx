import { BsBatteryFull, BsVolumeMute } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import Menu from "./Menu";
import { useState } from "react";
import WifiBluetoothMenu from "./WifiBluetoothMenu";

const Taskbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showWifiBtMenu, setShowWifiBtMenu] = useState(false);

  const showMenuFunc = () => {
    setShowWifiBtMenu(false);
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const showWifiBtMenuFunc = () => {
    setShowMenu(false);
    showWifiBtMenu ? setShowWifiBtMenu(false) : setShowWifiBtMenu(true);
  };

  return (
    <>
      {showMenu && <Menu />}
      <div className="w-screen overflow-hidden backdrop-blur-md h-10 absolute bottom-0 flex justify-center items-center space-x-5">
        <img
          src="/icons/w11.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
          onClick={showMenuFunc}
        />
        <img
          src="/icons/file-manager.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
        />
        <img
          src="/icons/preferences-system.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
        />
        <img
          src="/icons/google-chrome.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
        />
        <img
          src="/icons/visualstudiocode.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
        />
        <img
          src="/icons/notepad.svg"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
        />
        <img
          src="/icons/recycle-bin.png"
          className="w-10 h-10 p-2 rounded-sm cursor-pointer hover:bg-[#ffffff28]"
          alt=""
        />

        <div className="rightSideMenu w-48 px-4 h-full flex justify-between absolute right-0">
          {showWifiBtMenu && <WifiBluetoothMenu />}
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
