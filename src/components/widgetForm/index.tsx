import { useState } from 'react';
import {FeedbackTypeStep} from './components/FeedbackTypeStep';
import {FeedbackContentStep} from './components/FeedbackContentStep';
import {FeedbackSucessStep} from './components/FeedbackSucessStep';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';



export const feedbackTypes = {
  BUG:{
    title:'Problema',
    source : bugImageUrl,
    alt : 'Imagem de um insecto'
  } ,
  IDEA:{
    title: 'Ideia',
    source : ideaImageUrl,
    alt : 'Imagem de uma lâmpada'
  } ,
  OTHER : {
    title: 'Outro',
    source : thoughtImageUrl,
    alt : 'Imagem de uma nuvem'
  } 
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedBackSent, setFeedbackSent] = useState(false);
  const handleRestartFeedback =() =>{
      setFeedbackSent(false);
      setFeedbackType(null);
  }
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {
        feedBackSent?
        <FeedbackSucessStep
          onRestart ={handleRestartFeedback}
        />
        :
        <>
          {
            !feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
            ) : (
              <FeedbackContentStep 
              feedbackType={feedbackType}
              onRestart ={handleRestartFeedback}
              onFeedbackSent ={()=>setFeedbackSent(true)}
              />
            )
          }   
        </>
      }
       <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/rjtony/">Raimundo Tony</a>
       </footer>
    </div>
  )
}