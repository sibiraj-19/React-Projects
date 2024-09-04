import React, { useState } from "react";
import "./cel.css";
function CtoF() {
  const [celcius, setcelcius] = useState(0);
  const [fharenheit, setfharenheit] = useState(32);
  const [degree, setdegree] = useState();
  const [degree1, setdegree1] = useState();
  const cal = () => {
    const d = (parseInt(celcius) * (9 / 5) + 32).toFixed(2);
    setdegree(d);
  };
  const clr = () => {
    setcelcius(0);
    setdegree(0);
    setdegree1(0);
    setfharenheit(32);
  };
  const cal1 = () => {
    const d1 = (parseInt(fharenheit - 32) * (5 / 9)).toFixed(2);
    setdegree1(d1);
  };
  return (
    <>
      <div id="box">
        <center>
          <h1>
            C to F & F to C <br />
            Convertor
          </h1>
        </center>

        <div id="box1">
          <div id="C">
            <label htmlFor="celcius">
              <b>Celsius (°C) </b>
            </label>
            <br />
            <br />
            <input
              type="number"
              value={celcius}
              onChange={(e) => setcelcius(e.target.value)}
            />
            <br />
            <br />
            <button onClick={cal}>get</button>
            <center>
              <h3>{degree}° F</h3>
            </center>
          </div>

          <div id="F">
            <label htmlFor="fahrenheit">
             
              <b>Fahrenheit (°F)</b>
            </label>
            <br /> <br />
            <input
              type="number"
              value={fharenheit}
              onChange={(e) => setfharenheit(e.target.value)}
            />
            <br />
            <br />
            <button onClick={cal1}>get</button>
            <center>
           
              <h3>{degree1}° C</h3>
            </center>
          </div>
        </div>
        <button onClick={clr} id="but">
          clr
        </button>
      </div>
    </>
  );
}
export default CtoF;
