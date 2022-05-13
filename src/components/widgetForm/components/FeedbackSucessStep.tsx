import { CloseButton } from "../../CloseButton";
import Lottie from "lottie-react";
import animation from '../../../lotties/success.json';


interface FeedbackSucessStepProps {
  onRestart : () => void;
}
export function FeedbackSucessStep( {onRestart}:FeedbackSucessStepProps){
  return(
   <>
      <header>
        <CloseButton/>
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <Lottie 
          style={{width:100,height:100}} 
          animationData={animation}
          loop={false}
          initialSegment={[0,45]}
       />
        <span className="text-xl mt-5">Agradecemos o Feedback</span>
        <button
         onClick={onRestart}
         type="button"
         className="py-2 px-6 mt-5 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
         >
          Quero enviar outro
        </button>
      </div>
   </>
  )
}