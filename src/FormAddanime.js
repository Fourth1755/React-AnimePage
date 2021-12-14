import { useEffect, useState } from "react";
import "./FormAddanime.css"

const FormAddanime=(props)=>{
    const [title,settital]=useState("");
    const [score,setscore]=useState(0);
    const [formval,setformval]=useState(false);
    const inputtital=(event)=>{
        return settital(event.target.value);
    }
    const inputscore=(event)=>{
        return setscore(event.target.value);
    }
    useEffect(()=>{
        if(title!=""&& score!=0){
            setformval(true);
        }
    },[title],[score])  
    const saveAnime=(event)=>{
        event.preventDefault();
        const itemAnime={
            title:title,
            score:score
        }
        props.addNewAnime(itemAnime);
        settital("");
        setscore(0);
        setformval(false);
    }
    return(  
        <div>
            <form className="d-flex" onSubmit={saveAnime}>
                <input className="form-control me-2" type="text" placeholder="Add anime"onChange={inputtital} value={title} style={{width:"190px"}}></input>
                <select class="form-select" aria-label="Default select example" onChange={inputscore} value={score}>
                    <option selected>score</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                    <option >9</option>
                    <option>10</option>
                </select>
                {/* <input className="form-control me-2" type="number" placeholder="Add score"onChange={inputscore} value={score}></input> */}
                <button className="btn" type="submit"disabled={!formval}>Add</button>
            </form>
            {/* <form onSubmit={saveData}>
                <div className="form-control" >
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="กรุณใส่ชื่อรายการ" onChange={inputtitle} value={title}/>
                </div>
                <div className="form-control">  
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="กรุณาใส่จำนวนเงิน" onChange={inputAmount} value={amount}></input>
                </div>
                <button type="submit" className="btn" disabled={!formval}>เพิ่มข้อมูล</button>
            </form> */}
        </div>
    )
}
export default FormAddanime