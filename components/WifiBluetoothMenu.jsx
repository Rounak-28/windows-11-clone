import { BsVolumeUp, BsBatteryFull, BsSun } from "react-icons/bs"
import { HiOutlinePencil } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const WifiBluetoothMenu = () => {
  return (
    <div className="w-[355px] h-[380px] bg-[#242424] absolute bottom-14 right-4 rounded-md">
      <div className="h-1/2 flex justify-center items-center mt-2">
        <div className="grid grid-cols-3 gap-5 items-center h-full">
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
          <div className="w-24 h-10 rounded bg-[#313131]"></div>
        </div>
      </div>
      <div className="h-1/2 px-3 pb-14 mt-6 flex flex-col space-y-12">
        <div className="inpt flex  space-x-6 items-center">
          <BsSun className="text-xl"/>
          <input type="range" className="w-72 h-1 accent-blue-300"/>
        </div>
        <div className="inpt flex space-x-6 items-center">
          <BsVolumeUp className="text-xl"/>
          <input type="range" className="w-72 h-1 accent-blue-300"/>
        </div>
      </div>
      <div className="bottom w-full h-12 bg-[#1c1c1c] absolute bottom-0 left-0 rounded-b-md flex items-center justify-between">
        <div className="battery flex mx-3 items-center space-x-2 w-fit">
        <BsBatteryFull className="text-xl" />
        <p className="text-xs">82%</p>
        </div>
        <div className="settings flex mx-3 space-x-3">
          <HiOutlinePencil />
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  );
};
export default WifiBluetoothMenu;
