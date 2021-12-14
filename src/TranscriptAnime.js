import Item from "./Item"
import "./TranscriptAnime.css"

const TranscriptAnime=(props)=>{
    const {data}=props;
    
    return(
        <div>
            <ul className="item-list">
            {data.map((element)=>{
              return <Item{...element}/>
            })}
            </ul>
      </div>
    )
}
export default TranscriptAnime