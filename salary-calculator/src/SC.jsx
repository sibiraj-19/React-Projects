import React,{useState} from "react";
import './sc.css'
function SalaryCalculator(){
    const [salary,setsalary]=useState(0);
    const [expense1,setexpense1]=useState(0);
    const [expense2,setexpense2]=useState(0);
    const [expense3,setexpense3]=useState(0);
    const[savings ,setsavings]=useState(0);
    const calculate =()=>{ 
        const expense=parseInt(expense1) + parseInt(expense2) + parseInt(expense3);
    const  amount = parseInt(salary) - expense;
    setsavings(amount) 
    }
    const clr=()=>{
       setsalary(0);
       setexpense1(0);setexpense2(0);setexpense3(0);setsavings(0)
    }
     return(
        <>
        <center>
        <h1>Salary Calculator</h1>
        <div id="con">
         <br /><br />
           <div>
            <label htmlFor="salary">Salary</label><br />
            <input type="number" value={salary} onChange={(e)=>setsalary(e.target.value)} />
           </div>
           <div>
            <label htmlFor="expense1">Expense(Rent)</label><br /> 
            <input type="number" value={expense1} onChange={(e)=>setexpense1(e.target.value)} />
           </div>
           <div>
            <label htmlFor="expense2">Expense(food)</label><br /> 
            <input type="number" value={expense2} onChange={(e)=>setexpense2(e.target.value)} />
           </div>
           <div>
            <label htmlFor="expense3">Expense(other)</label><br /> 
            <input type="number" value={expense3} onChange={(e)=>setexpense3(e.target.value)} />
           </div>
           <div>
            <br />
            <button onClick={calculate}>calcuate </button>  <button onClick={clr}>Clear</button>
            <div id="savings">
            <h1>savings :{savings}</h1> </div>
           </div>
        </div>
        </center>
        </>
     )
}
export default SalaryCalculator




