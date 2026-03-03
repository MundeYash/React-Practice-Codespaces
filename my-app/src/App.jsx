// import { useState } from "react";
// import { Props } from "./react-concepts/props/Props";
// import { Props2 } from "./react-concepts/props/Props2";
// import { FunctionBasedReactComponents } from "./react-concepts/typesOfComponents/FunctionComponent.jsx";
// import { ClassBasedReactComponents } from "./react-concepts/typesOfComponents/ClassComponents.jsx";
import "./App.css";
// import Todo from "./MACHINE-CODING/To-Do-App/Todo";
// import Autocomplete from "./MACHINE-CODING/DebounceSearch/Autocomplete/Autocomplete";
// import ModalParent from "./MACHINE-CODING/Modal/ModalParent";
// import PaginationHelper from "./MACHINE-CODING/Reusable Pagination/PaginationHelper";
// import FormValidation from "./MACHINE-CODING/FromValidation/FormValidation";
import InfiniteScroll from "./MACHINE-CODING/6InfiniteScroll/InfiniteScroll";
function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log("this is clicked");
  //   setCount(count + 1);
  //   console.log(count);
  //   window.alert("hi , this is count value =" + count);
  // };
  return (
    <>
      {/* <div className="parent">
        <h6>SAMPLE CODE:</h6>
        <div>hello world</div>
        <button className="btn" onClick={handleClick}>
          click me
        </button>
        <p>
          Now this React code is linked with githubAction pipeline and now can
          you test the code as well
        </p>
        <h6>PROPS:</h6>
        <Props studentName="yash Munde" />
        <Props2 propvalue="24 Yrs" />

        <h6>CLASS BASED COMPONENTS RENDERED:</h6>
        <ClassBasedReactComponents />

        <h6>FUNCTIONAL COMPONENTS RENDERED :</h6>
        <FunctionBasedReactComponents />
      </div> */}

      {/* <Todo />
      <Autocomplete />
      <ModalParent />
      <PaginationHelper />
      <FormValidation /> */}
      <InfiniteScroll />
    </>
  );
}

export default App;
