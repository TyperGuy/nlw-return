import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas';

export function ScreenShotButton(){

  async function  handleTakeScreenShot(){
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
  }

  return(
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent   text-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      <Camera className="w-6 h-6"/>
    </button>
  )
}