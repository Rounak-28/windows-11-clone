import React from "react";
import {
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";

const Settings = (props) => {
  const closeSettings = () => {
    props.setShowSettings(false);
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[80%] h-[600px] rounded-md resize overflow-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1f35] to-[#202020] relative">
        <div className="rightOptions flex absolute justify-center right-1 space-x-1 top-0">
          <div className="hover:bg-[#ffffff28] p-3" onClick={closeSettings}>
            <AiOutlineMinus />
          </div>
          <div className="hover:bg-[#ffffff28] p-3">
            <BiRectangle />
          </div>
          <div className="hover:bg-[#ffffff28] p-3" onClick={closeSettings}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="flex space-x-3 py-2 px-4 text-sm absolute top-0 left-0">
          <img src="/icons/settings.svg" className="w-5 h-5" alt="" />
          <p>Settings</p>
        </div>
        <div className="main w-full h-full pt-10">
          <div className="w-full h-full flex">
            <div className="left w-[25%] h-full px-2 space-y-2">
              <div className="profile w-full h-[17%] flex items-center space-x-5 hover:bg-[#ffffff08] rounded-md px-2">
                <div className="profile_circle w-14 h-14 rounded-full bg-white"></div>
                <p className="font-semibold">Rounak-28</p>
              </div>
              <div className="inpt w-full h-8 mx-2 rounded relative">
                <input
                  type="text"
                  className="w-full h-full rounded outline-none bg-[#2b2d39] indent-3"
                  placeholder="find a setting"
                />
                <AiOutlineSearch className="absolute right-2 top-2" />
                <div className="line w-full h-[1px] bg-[#ffffff60]"></div>
              </div>
              <div className="list mx-2 h-custom w-full space-y-1 overflow-hidden">
                <div></div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>System</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Bluetooth & devices</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Netword & internet</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Personalization</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Apps</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Accounts</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Time & Language</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Gaming</p>
                </div>
                <div className="item w-full min-h-[39px] h-[10%] px-2 hover:bg-[#ffffff12] text-sm rounded flex items-center space-x-4">
                    <div className="icon w-7 h-7 bg-white rounded-full"></div>
                    <p>Accessibilaty</p>
                </div>
              </div>
            </div>
            <div className="right w-[75%] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
