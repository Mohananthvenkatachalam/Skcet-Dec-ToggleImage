import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

function MyGallery() {
  const [isVisible, setIsVisible] = useState(true);

  function Images() {
    if (isVisible) {
      return <img src={img1} className="h-full" alt="" />;
    } else {
      return <img src={img2} className="h-full" alt="" />;
    }
  }
  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center">
      <div className="flex">
        <h1 className="mb-5 text-[35px] font-sans font-bold ">
          My Image Toggler
        </h1>
        <GrGallery className="mt-4 text-3xl ml-5" />
      </div>
      <div className="w-[600px] h-[510px] bg-slate-400 rounded-lg">
        <div className="flex flex-col h-[90%] justify-center items-center mb-[-15px]">
          <div
            className="bg-white w-[90%] h-[80%] border-2 border-slate-500"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <Images />
          </div>
        </div>
        <div className="bg-slate-100 mx-7 ps-3 py-[10px] rounded-lg font-bold">
          <p>Click the above image to toggle it...</p>
        </div>
      </div>
    </div>
  );
}

export default MyGallery;
