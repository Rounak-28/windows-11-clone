import { HiOutlineLockClosed } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";

const UserBtnTooltip = () => {
    return (
        <div className="w-56 h-32 text-sm bg-[#2b2b2b] rounded-md absolute bottom-14 left-1 flex flex-col justify-evenly">
          <div className="flex items-center py-1 mx-1 rounded space-x-3 hover:bg-[#ffffff20]">
            <RiUserSettingsLine className="text-xl" />
            <p>Change account settings</p>
          </div>
          <div className="flex items-center py-1 mx-1 rounded space-x-3 hover:bg-[#ffffff20]">
            <HiOutlineLockClosed className="text-xl" />
            <p>Lock</p>
          </div>
          <div className="flex items-center py-1 mx-1 rounded space-x-3 hover:bg-[#ffffff20]">
            <VscSignOut className="text-xl" />
            <p>Sign out</p>
          </div>
        </div>
      );
}

export default UserBtnTooltip