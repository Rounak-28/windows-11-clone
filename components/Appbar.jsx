
const Appbar = () => {
  return (
    <div className="h-screen w-20 absolute left-0 top-0 flex flex-col items-center space-y-10 text-white text-xs text-center">
      <div className="mt-4 cursor-pointer flex flex-col items-center w-full hover:bg-[#ffffff28] rounded-sm">
        <img src="/icons/recycle-bin.png" className="w-14 h-14" alt="" />
        <p>Recycle Bin</p>
      </div>
      <div className="cursor-pointer flex flex-col items-center w-full hover:bg-[#ffffff28] rounded-sm">
        <img src="/icons/google-chrome.svg" className="w-14 h-14" alt="" />
        <p>Google Chrome</p>
      </div>
      <div className="cursor-pointer flex flex-col items-center w-full hover:bg-[#ffffff28] rounded-sm">
        <img src="/icons/visualstudiocode.svg" className="w-14 h-14" alt="" />
        <p>VS Code</p>
      </div>
    </div>
  );
};

export default Appbar;
