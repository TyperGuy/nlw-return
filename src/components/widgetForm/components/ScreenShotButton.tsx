import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../../Loading";

interface ScreenShotButtonProps {
  screenShot: string| null;
  onScreenshotTook: (screenShot:string|null) => void;
}

export function ScreenShotButton({screenShot,onScreenshotTook}:ScreenShotButtonProps){
  const [isTakingPicture,setIstakingPicture] =useState(false)

  async function  handleTakeScreenShot(){
    setIstakingPicture(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    console.log(base64Image)
    setIstakingPicture(false);
    onScreenshotTook(base64Image);
  }

  return(
    <>
     {
      (!screenShot)?
        <button
          onClick={()=>handleTakeScreenShot()}
          type="button"
          className="p-2 bg-zinc-800 rounded-md border-transparent   text-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
          {
            isTakingPicture ?<Loading/>:<Camera className="w-6 h-6"/>
          }
      </button>
        :
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent  flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage:`url(${screenShot})`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Trash
          onClick={()=>onScreenshotTook(null)}
          weight="fill"/>
      </button>
    
    }
  </>
  )
}