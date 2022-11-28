import { BsPower } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";

const PowerBtnTooltip = () => {
  return (
    <div className="w-32 h-24 bg-[#2b2b2b] text-sm rounded-md absolute bottom-14 right-1 flex flex-col justify-evenly">
      <div className="flex items-center py-[2px] mx-1 rounded space-x-3 hover:bg-[#ffffff20]">
        <BiMoon className="rotate-[260deg] text-xl" />
        <p>Sleep</p>
      </div>
      <div className="flex items-center py-[2px] mx-1 rounded space-x-3 hover:bg-[#ffffff20]">
        <BsPower className="text-xl" />
        <p>Shut down</p>
      </div>
      <div className="flex items-center py-[2px] mx-1 rounded space-x-3 hover:bg-[#ffffff20]">
        <VscDebugRestart className="rotate-[30deg] text-xl" />
        <p>Restart</p>
      </div>
    </div>
  );
};

export default PowerBtnTooltip;
