import React from "react";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";

const Settings = (props) => {
  const closeSettings = () => {
    props.setShowSettings(false);
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[80%] h-[600px] rounded-md resize overflow-auto bg-[#282828] relative">
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
      </div>
    </div>
  );
};

export default Settings;
