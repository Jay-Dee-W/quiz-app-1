
export default function Answers(props){
// console.log(props)
    return(
        <div className='answers'>
            { props.options.map( (answer,i) => {
                
               return ( 
                <button className={props.option ===i ? props.correctAnswer === i ? 'correct-answer': 'incorrect-answer': 'answer'}  onClick={() => props.onClick(i)} key={i}>{answer}</button>
               )
            })}
        </div>
    )
}