import { useState } from "react"
import "./AddanimeComponent.css"
import FormAddanime from "./FormAddanime"
import TranscriptAnime from "./TranscriptAnime"
import { element } from 'prop-types';

const AddanimeComponent=()=>{
    const initdata=[
        {id:1,title:"Fullmetal Alchemist: Brotherhood" ,score:9},
        {id:2,title:"Steins;Gate" ,score:8},
        {id:3,title:"Hunter x Hunter" ,score:8},
        {id:4,title:"Kimi no Na wa." ,score:10},
        {id:5,title:"Jujutsu Kaisen" ,score:10}
      ]
    const [item,setitem]=useState(initdata);
    const addNewAnime=(newAnime)=>{
        setitem((pre)=>{
            return [newAnime,...pre];
        })
      }
    return(
        <div className="add-container">
            <h4>อนิเมะที่เคยดูแล้ว</h4>
            <FormAddanime addNewAnime={addNewAnime}/>
            <TranscriptAnime data={item}/>
        </div>
    )
}
export default AddanimeComponent