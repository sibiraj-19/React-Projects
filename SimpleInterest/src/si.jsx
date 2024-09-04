import React, {useState} from "react";
import './si.css';
const SimpleInterest = () =>{
    const[NUMBER, setNumber] = useState();
    const[Time, settime] = useState();
    const[Rate, setrate] = useState();
    const[ans, setAns] = useState();
    
    const calculatenum =()=>{
        const answer= (((NUMBER )*(Time)*(Rate))/100).toFixed(2);
        setAns(answer); 
    };
return(
    <>
    <div id="div">
    <center><h2>Simple Interest Calculator</h2></center>  
        <hr />
       <label>Principal Amount:</label><br /><br />

       <center>    <input 
            id="Principal"
            type="number"
            placeholder="Principal amount" 
            value={NUMBER}
            onChange={(e)=>setNumber(e.target.value)}
            required /> <br /><br /></center>      
  <label>Time:</label><br /><br />
  <center>   <input 
            id="Time" 
            type="number"
            placeholder="Time"
            value={Time}
            onChange={(e)=>settime(e.target.value)}
            required /><br /><br /></center> 

        <label>Rate:</label><br /><br />
        <center><input 
            id="Rate" 
            type="number" 
            placeholder="Rate" 
            value={Rate}
            onChange={(e)=>setrate(e.target.value)}
            required /> <br /> <br /></center> 
      
     <center>  <button onClick={calculatenum}>Calculate</button>  </center> <hr />
        <h3>The Simple Imterest : {ans}</h3>
        {SimpleInterest && <p> Simple Interest: {SimpleInterest}</p>}  
    </div>
    </>
)
}


export default SimpleInterest