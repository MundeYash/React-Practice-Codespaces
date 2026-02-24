import { useState } from "react";
import {Props} from "./react-concepts/props/Props";
import {Props2} from "./react-concepts/props/Props2"

import "./App.css";

function App() {
  const[count ,setCount] = useState(0);

  const handleClick = ()=>{
    console.log("this is clicked");
    setCount(count + 1)
    console.log(count);
    window.alert("hi , this is count value ="+count);
  }
  return (
    <>
      <div className="parent">
        <div>hello world</div>
        <button className="btn" onClick={handleClick}>click me</button>
        <p>
          Now this React code is linked with githubAction pipeline and now can
          you test the code as well
        </p>
        <Props studentName ="prop1 data"/>
        <Props2 propVlaue ="prop-value"/>

      </div>
    </>
  );
}

export default App;
