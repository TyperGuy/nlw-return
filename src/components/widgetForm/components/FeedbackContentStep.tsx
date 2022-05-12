import { ArrowLeft} from 'phosphor-react';
import {FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import {ScreenShotButton} from './ScreenShotButton';

interface FeedbackContentStepProps {
  feedbackType : FeedbackType;
  onRestart : () => void;
  onFeedbackSent: () => void;
}


export function FeedbackContentStep({feedbackType,onRestart,onFeedbackSent}: FeedbackContentStepProps) {
  const {title,source,alt} = feedbackTypes[feedbackType];
  const [screenShot, setScreenShot] = useState<string| null>(null);
  const [comment,setComment] = useState('');

  const handleSubmitFeedback = (event:FormEvent) =>{
    event.preventDefault();
    console.log({
      screenShot,
      comment,
    })

    onFeedbackSent();
  }
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
      <form
       onSubmit={handleSubmitFeedback}
       className="my-4 w-full">
        <textarea 
          className="min-w-[304px] min-h-[112px] w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent-transparent scrollbar-thin"
          placeholder="Conte com detalhe o que está acontecendo..."
          onChange={event=>setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenShot={screenShot}
            onScreenshotTook={setScreenShot}
          />
          <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent  flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
          disabled={comment.length===0}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  
  )
}