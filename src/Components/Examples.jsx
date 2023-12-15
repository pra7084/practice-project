import "./Examples.css";
import { useState } from "react";
import Data from './Data';
const Examples = () => {
  const [value,setValue]=useState('');
  const clickHandler = (updateValue) => {
        setValue(updateValue);
  };
  let example=<div className="content">Select above one button</div>
  if(value!=''){
         example=Data[value];
  }
  return (
    <>
    <div className="wrapper">
      <div className="example">
        <h3>Examples</h3>
      <div className="buttons">
        <div>
          <button onClick={()=>clickHandler('component')}>Component</button>
        </div>
        <div>
          <button onClick={()=>clickHandler('jsx')}>JSX</button>
        </div>
        <div>
          <button onClick={()=>clickHandler('props')}>Props</button>
        </div>
        <div>
          <button onClick={()=>clickHandler('state')}>State</button>
        </div>
      </div>
         {example}
      </div>
      </div>
    </>
  );
};
export default Examples;
