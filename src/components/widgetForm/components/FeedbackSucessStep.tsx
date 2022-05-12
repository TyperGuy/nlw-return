import { CloseButton } from "../../CloseButton";
import img from '../../../assets/sucess.svg';

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
        <img style={{width:'100px', height: '100px'}} src={img} alt="sucess icon" />
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