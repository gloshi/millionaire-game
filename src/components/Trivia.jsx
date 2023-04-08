import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

function Trivia({ data, questionNumber, setStop, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer]  = useState(null);
  const [classTitle, setClassTitle]  = useState('answer');

  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
  letsPlay()
  },[letsPlay])


    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration);
    }

    const hadleClick = (el) => {
        setSelectAnswer(el)
        setClassTitle('answer active') 
        delay(3000,() => {
            setClassTitle(el.correct? 'answer correct' : 'answer wrong') 
        })
        delay(6000,() => {
           if(el.correct) {
            correctAnswer()
            setQuestionNumber((prev) => prev + 1)
            setSelectAnswer(null)
           }else {
            wrongAnswer()
            setStop(true)
           }
           
        })
       
    }
  return (
    <div className="trivia">
      <div className="question">{question?  question.question : ''}</div>
      <div className="answers">

        {question?.answers.map(el => (
             <div key={el.text} className={selectAnswer === el? classTitle : 'answer'} onClick={() => hadleClick(el)} >{el.text}</div>
        ))
        }
      </div>
    </div>
  );
}
export default Trivia;
