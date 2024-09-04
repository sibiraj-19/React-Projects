import React,{useState,useEffect} from "react";
import './counter.css';

function WordCounter(){
const [letter,setletter]=useState("");
const [wcount,setwcount]=useState();
const [lcount,setlcount]=useState();


useEffect(() => {
    const length = letter.length;
    setlcount(length);

    const words = letter.trim().split(/\s+/).filter(Boolean);
    setwcount(words.length);
}, [letter]);

const clear=()=>{
    setwcount(0);setlcount(0);setletter("");
}

return(
    <>
    <div id="box1"></div>
   
    <div id="box">
    <center><h1>Word Counter</h1></center> <hr />
    <br />
   <center><input type="text" value={letter} onChange={(e)=>setletter(e.target.value)} placeholder="Enter Your Text Here"/> </center> <br />
    <center><button onClick={clear}>Clr</button></center>
    <div id="result">
       
        <h2>Character Count : {lcount}</h2>
        <h2>Word Count : {wcount}</h2>
        </div>
    </div>
    </>
)
}
export default WordCounter;