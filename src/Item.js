
const Item=(props)=>{
    const {title,score} =props
    return(
        <li>{title}<span>{score}</span></li>
    )
}
export default Item