import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";
import store from "../zustand/store";

const Notepad = (props) => {
  
  const closeNotepad = store(state => state.closeNotepad);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[80%] h-[600px] rounded-md resize overflow-hidden bg-[#3b3b3b]">
        <div className="flex space-x-3 py-2 px-4 text-sm relative bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1c1f2d] to-[#1f2022] h-[80px]">
          <img src="/icons/notepad.svg" className="w-5 h-5" alt="" />
          <p>Notepad</p>
          <div className="rightOptions flex absolute justify-center right-1 space-x-1 top-0">
            <div className="hover:bg-[#ffffff28] p-3" onClick={closeNotepad}>
              <AiOutlineMinus />
            </div>
            <div className="hover:bg-[#ffffff28] p-3">
              <BiRectangle />
            </div>
            <div className="hover:bg-[#ffffff28] p-3" onClick={closeNotepad}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="h-10 px-4 w-full absolute bottom-0 -left-3 flex items-center">
            <p className="hover:bg-[#ffffff28] px-3 py-1 rounded">File</p>
            <p className="hover:bg-[#ffffff28] px-3 py-1 rounded">Edit</p>
            <p className="hover:bg-[#ffffff28] px-3 py-1 rounded">View</p>
          </div>
        </div>
        <textarea className="h-[520px] w-full bg-[#282828] p-4"></textarea>
      </div>
    </div>
  );
};

export default Notepad;
