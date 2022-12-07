import { AiOutlineClose, AiOutlineMinus, AiOutlineReload } from "react-icons/ai"
import { BsArrowLeft, BsArrowRight, BsGithub } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { BiRectangle } from "react-icons/bi"
import store from "../zustand/store"

const Chrome = (props) => {

    const closeChrome = store(state => state.closeChrome)

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
        <div className="w-[80%] h-[600px] rounded-md resize overflow-auto bg-[#3b3b3b]">
            <div className="h-[20%] bg-[#3b3b3b] rounded-t-md">
                <div className="flex space-x-3 items-center py-2 px-4 text-sm relative">
                    <img 
                    src="/icons/google-chrome.svg"
                    className="w-5 h-5"
                    alt=""
                     />
                     <p>Google Chrome</p>
                     <div className="rightOptions flex absolute justify-center right-1 space-x-1 items-center">
                        <div className="hover:bg-[#ffffff28] p-3" onClick={closeChrome}>
                            <AiOutlineMinus />
                        </div>
                        <div className="hover:bg-[#ffffff28] p-3">
                            <BiRectangle />
                        </div>
                        <div className="hover:bg-[#ffffff28] p-3" onClick={closeChrome}>
                            <AiOutlineClose />
                        </div>                        
                     </div>
                </div>
                <div className="flex items-center h-12 space-x-4">
                    <div></div>
                    <BsArrowLeft className="text-xl" />
                    <BsArrowRight className="text-xl" />
                    <AiOutlineReload className="text-xl" />
                    <input type="text" className="w-[85%] h-10 bg-[#2b2b2b] rounded outline-none indent-4 text-sm"
                    placeholder="search with Google or enter address" />
                    <FaUserCircle className="text-xl"/>
                </div>
                <div className="h-8 flex space-x-4 text-sm">
                    <div></div>
                    <a className="flex space-x-1 items-center hover:bg-[#ffffff28] rounded px-1 my-1" href="https://github.com/Rounak-28/" target={"_blank"} rel="noreferrer">
                        <BsGithub className="text-xl"/>
                        <p>Github</p>
                    </a>
                    <a className="flex space-x-1 items-center hover:bg-[#ffffff28] rounded px-1 my-1" href="https://rounak-28.vercel.app/" target={"_blank"} rel="noreferrer">
                        <img src="/rounak-28.jpg" alt="" className="w-8 h-8 rounded-full p-1" />
                        <p>My portfolio</p>
                    </a>
                </div>
            </div>
            <iframe src="https://www.google.com/webhp?igu=1" frameborder="0" className="w-full h-[80%] rounded-b-md"></iframe>
        </div>
    </div>
  )
}

export default Chrome