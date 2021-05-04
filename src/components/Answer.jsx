 

export default function Answer(props){
    // console.log( props )
    return(
        <div className='answer' onClick={props.onClick(props.id)} >{props.value}</div>
    )
}