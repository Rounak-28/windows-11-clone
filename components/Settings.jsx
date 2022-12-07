import React from "react";
import {
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlineRight,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";
import { BsBell, BsLaptop, BsMoon, BsPower, BsVolumeUp } from "react-icons/bs";
import { FaMicrosoft } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import store from "../zustand/store";


const Settings = () => {

  const closeSettings = store(state => state.closeSettings)

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
            <div className="right w-[75%] h-full">
              <div className="top w-full h-[30%]">
                <div className="h-[40%] text-2xl font-semibold flex items-center px-5">System</div>
                <div className="h-[60%] flex pr-6">
                  <div className=" h-full w-[40%] flex items-center px-2 space-x-4 text-sm">
                    <div className="w-32 border-2 border-black">
                      <img src="/bg.jpg" alt="" className="w-full" />
                    </div>
                    <div className="text">
                      <p className="font-bold">Rog-G14</p>
                      <p>Rog Zephyrus G14</p>
                      <p className="text-[#47b4ee]">Rename</p>
                    </div>
                  </div>
                  <div className="h-full w-[60%] flex justify-end px-4 py-6 space-x-2">
                    <div className="m365 h-full w-[35%] flex space-x-2 items-center hover:bg-[#ffffff12] rounded">
                      <FaMicrosoft className="text-2xl"/>
                      <div className="text-xs">
                        <p className="font-semibold">Microsoft 365</p>
                        <p>View benefits</p>
                      </div>
                    </div>
                    <div className="wsupdate h-full w-[35%] flex space-x-2 items-center hover:bg-[#ffffff12] rounded">
                      <MdUpdate className="text-2xl"/>
                      <div className="text-xs">
                        <p className="font-semibold">Windows update</p>
                        <p>Last checked: 9 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[70%] space-y-2 pr-6 pl-2">
                <div className="w-full h-[18%] bg-[#272a3d] hover:bg-[#393a49] rounded relative flex items-center">
                  <AiOutlineRight className="absolute right-4" />
                  <BsLaptop className="absolute left-4" />
                  <div className="mx-14 text-sm">
                    <p className="font-semibold">Display</p>
                    <p className="text-gray-200">Monitors, brightness, night light, display profile</p>
                  </div>
                </div>
                <div className="w-full h-[18%] bg-[#272a3d] hover:bg-[#393a49] rounded relative flex items-center">
                  <AiOutlineRight className="absolute right-4" />
                  <BsVolumeUp className="absolute left-4" />
                  <div className="mx-14 text-sm">
                    <p className="font-semibold">Sound</p>
                    <p className="text-gray-200">Monitors, brightness, night light, display profile</p>
                  </div>
                </div>
                <div className="w-full h-[18%] bg-[#272a3d] hover:bg-[#393a49] rounded relative flex items-center">
                  <AiOutlineRight className="absolute right-4" />
                  <BsBell className="absolute left-4" />
                  <div className="mx-14 text-sm">
                    <p className="font-semibold">Notifications</p>
                    <p className="text-gray-200">Monitors, brightness, night light, display profile</p>
                  </div>
                </div>
                <div className="w-full h-[18%] bg-[#272a3d] hover:bg-[#393a49] rounded relative flex items-center">
                  <AiOutlineRight className="absolute right-4" />
                  <BsMoon className="absolute left-4" />
                  <div className="mx-14 text-sm">
                    <p className="font-semibold">Focus assist</p>
                    <p className="text-gray-200">Monitors, brightness, night light, display profile</p>
                  </div>
                </div>
                <div className="w-full h-[18%] bg-[#272a3d] hover:bg-[#393a49] rounded relative flex items-center">
                  <AiOutlineRight className="absolute right-4" />
                  <BsPower className="absolute left-4" />
                  <div className="mx-14 text-sm">
                    <p className="font-semibold">Power & battery</p>
                    <p className="text-gray-200">Monitors, brightness, night light, display profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
