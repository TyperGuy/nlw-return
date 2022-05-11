import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  feedbackType : FeedbackType;
  onRestart : () => void;
}
export function FeedbackContentStep({feedbackType,onRestart}: FeedbackContentStepProps) {
  const {title,source,alt} = feedbackTypes[feedbackType];
  return(
    <>
      <header>
        <button type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft onClick={onRestart} weight="bold" className="w-4 h-4"/>
        </button>
         <span className="text-xl flex items-center gap-2">
           <img src={source} alt={alt} className="w-5 h-5" />
           {title}
          </span>
         <CloseButton/>
      </header>
      <form className="my-4 w-full">
        <textarea 
          className="min-w-[304px] min-h-[112px] w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-2 focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none "
          placeholder="Conte com detalhe o que está acontecendo..."
        />
      </form>
    </>
  
  )
}