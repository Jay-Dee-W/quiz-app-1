import Answers from './Answers'
import { useState } from "react"

import './Quiz.css'

export default function Quiz() {

    let questions = [
        {
            Question: 'testing0 ?',
            Answers: ['test0', 'test1', 'test3'],
            correctAnswer: 0,
        },
        {
            Question: 'testing1 ?',
            Answers: ['test0', 'test1',],
            correctAnswer: 1,
        },
    ]

    let [score, setScore] = useState(0);
    let [selected, setSelected] = useState(null)
    let [currentQ, setCurrentQ] = useState(0)

    let clickHandler = (i) => {


        if (selected == null) {
            setSelected(i)
        }

        if (i === questions[currentQ].correctAnswer) {
            setScore(score = score + 1);
        }
        setTimeout(() => {
            if ((currentQ + 1) < questions.length) {
                setCurrentQ(currentQ + 1)
            }

            setSelected(null)
        }, 2000)

    }

    return (
        <div className='quiz'>
            <div className='score'> Score:{score}</div>
            <div className='question'>{questions[currentQ].Question}</div>
            <Answers option={selected} options={questions[currentQ].Answers} correctAnswer={questions[currentQ].correctAnswer} onClick={clickHandler} />
        </div>
    )
}