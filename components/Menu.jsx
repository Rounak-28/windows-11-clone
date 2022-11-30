import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsPower } from "react-icons/bs";
import { useState } from "react";
import PowerBtnTooltip from "./PowerBtnTooltip";
import UserBtnTooltip from "./UserBtnTooltip";

const Menu = () => {
  const [showpowerTooltip, setShowpowertooltip] = useState(false);
  const [showUserTooltip, setShowUsertooltip] = useState(false);

  const showPowerTooltipFunc = () => {
    setShowUsertooltip(false)
    showpowerTooltip ? setShowpowertooltip(false) : setShowpowertooltip(true);
  };
  const showUserTooltipFunc = () => {
    setShowpowertooltip(false)
    showUserTooltip ? setShowUsertooltip(false) : setShowUsertooltip(true);
  };

  return (
    <div className="h-screen w-screen absolute bottom-0 flex justify-center items-center">
      <div className="bg-[#1b253ade] backdrop-blur-sm h-[85%] w-[45%] border-2 border-[#686d7497] rounded-lg px-6 flex flex-col justify-between pb-16">
        <div className="input w-full flex justify-center py-4">
          <input
            type="text"
            placeholder="Type here to search"
            className="w-[95%] bg-[#2e3035] h-8 text-sm indent-4 outline-none rounded-sm"
          />
        </div>
        <div className="w-full flex justify-between py-2 px-12">
          <p>Pinned</p>
          <button className="bg-[#32353dde] text-sm px-2 flex items-center py-[2px] mx-1 space-x-1 hover:bg-[#ffffff20] rounded">
            <p>All Apps</p>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-6 gap-y-8 text-xs">
          <div className="flex flex-col items-center">
            <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/microsoft-edge.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/word.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/excel.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/powerpoint.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/mail.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/calendar.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/settings.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/office.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/onenote.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/calculator.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/clock.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/notepad.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/paint.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/file-manager.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/films.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
            <p>VS Code</p>
          </div>
        </div>
        <div className="recomendations py-4 px-12">
          <p className="py-2">Recommended</p>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center py-[2px] mx-1 rounded space-x-4 hover:bg-[#ffffff20]">
              <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
              <p>VS Code</p>
            </div>
            <div className="flex items-center py-[2px] mx-1 rounded space-x-4 hover:bg-[#ffffff20]">
              <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
              <p>VS Code</p>
            </div>
            <div className="flex items-center py-[2px] mx-1 rounded space-x-4 hover:bg-[#ffffff20]">
              <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
              <p>VS Code</p>
            </div>
            <div className="flex items-center py-[2px] mx-1 rounded space-x-4 hover:bg-[#ffffff20]">
              <img src="/icons/visualstudiocode.svg" className="w-10" alt="" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
        <div className="h-16 w-full bg-[#191d29] px-12 absolute bottom-0 left-0 flex items-center justify-between rounded-b-lg">
          {showUserTooltip && <UserBtnTooltip />}
          <div
            className="left flex space-x-2 items-center px-2 py-1 rounded hover:bg-[#ffffff20]"
            onClick={showUserTooltipFunc}
          >
            <div className="round w-9 h-9 rounded-full bg-white"></div>
            <p>Rounak Kumbhakar</p>
          </div>
          {showpowerTooltip && <PowerBtnTooltip />}
          <div
            className="right flex space-x-2 items-center rounded justify-center hover:bg-[#ffffff20] w-10 h-10"
            onClick={showPowerTooltipFunc}
          >
            <BsPower className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
