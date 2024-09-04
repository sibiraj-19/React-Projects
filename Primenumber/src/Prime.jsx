import React, {useState} from "react";
import './Prime.css';
const Prime = () =>{
    const[NUMBER, setNumber] = useState();
 
    const[ans, setAns] = useState();
    var count =0;
    const calculatenum =()=>{
        
        let n=NUMBER;
        console.log(n,"n value");
        for(var i=1;i<=n;i++){
            console.log(i,"i value");
            if(n%i==0){
                count++;
            }
        }
        console.log(count,"count value");
        if(count==2){
            setAns("prime");
        }
        else{
            setAns("consonent");
        }
    };
return(
    <>
    <div id="div">
    <center><h2>Simple Interest Calculator</h2></center>  
        <hr />
       <label>NUMBER:</label><br /><br />

       <center>    <input 
            id="Principal"
            type="number"
            placeholder="Principal amount" 
            value={NUMBER}
            onChange={(e)=>setNumber(e.target.value)}
            required /> <br /><br /></center>      
  
      
     <center>  <button onClick={calculatenum}>Calculate</button></center> <hr />
        <h3>The given number Is : {ans}</h3>
    </div>
    </>
)
}


export default Prime