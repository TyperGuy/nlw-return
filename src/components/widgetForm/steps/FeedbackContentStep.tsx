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
      <div className="flex py-8 gap-2 w-full">
        
      </div>
    </>
  
  )
}