import Answers from './Answers'
import { useState } from "react"

import './Quiz.css'

export default function Quiz() {

    let questions = [
        {
            Question: 'The programming language Swift was created to replace what other programming language?',
            Answers: ['Objective-C', 'C#', 'Ruby' , 'C++'],
            correctAnswer: 0,
        },
        {
            Question: 'The original Roman alphabet lacked the following letters EXCEPT:',
            Answers: ['W', 'X', 'U' , 'J'],
            correctAnswer: 1,
        },
        {
            Question: 'In which Shakespearean play will you find the suicide of Ophelia?',
            Answers: ['Macbeth', 'Othello', 'Hamlet' , 'King Lear'],
            correctAnswer: 2,
        },
        {
            Question: 'If you grab the bladed end of a longsword in a specific way, you will not cut yourself.',
            Answers: ['True', 'False'],
            correctAnswer: 0,
        },
        {
            Question: 'In the 1999 movie Fight Club, which of these is not a rule of the "fight club"',
            Answers: ['You do not talk about FIGHT CLUB', 'Only two guys to a fight', "Always wear a shirt", "Fights will go on as long as they have to"],
            correctAnswer: 3,
        },
        {
            Question: "How long was Ken Jenning's win streak on Jeopardy?",
            Answers: ['74', "88","49","62"],
            correctAnswer: 0,
        },
        {
            Question: "Which of the following countries was not an axis power during World War II?",
            Answers: ["Italy", " Soviet Union" ,"Germany","Japan"],
            correctAnswer: 1,
        },
        {
            Question: "In Diablo lore, this lesser evil spawned from one of the seven heads of Tathamet, and was known as the Maiden of Anguish.",
            Answers: ["Valla","Malthael", "Andariel","Kashya"],
            correctAnswer: 2,
        },
        {
            Question: "In Magic: The Gathering, what term for blocking was established in the Portal set?",
            Answers: ["Blocking","Resisting","Shielding", "Intercepting"],
            correctAnswer: 3,
        },
        {
            Question: 'What vault in the video game "Fallout"  is the home of multiple clones named Gary?',
            Answers: ["Vault 101", "Vault 108","Vault 87","Vault 21"],
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