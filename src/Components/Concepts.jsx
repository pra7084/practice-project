
import "./Concepts.css";
import ConceptDes from "./ConceptDes";
import DummyData from "./DummyData.jsx";
import { useState } from "react";

const Concepts = () => {
  const [conceptOpener,setConceptOpener]=useState(true);

  const openConceptHandler=()=>{
     setConceptOpener(true);
    
  }
  return (
    <>
      <div className="outer">
        <div className="blackbox">
          <div className="core">Core Concepts</div>
          {/* {!conceptOpener && <div><button onClick={openConceptHandler}>Open Core Concepts</button></div>} */}
          <div className="conceptdes">
            {DummyData.map((item, index) => (
              <ConceptDes key={index} data={item} />
            ))}

            {/* // <ConceptDes data={DummyData[1]} /> */}
            {/* //  <ConceptDes data={DummyData[2]} /> */}
            {/* <ConceptDes data={DummyData[3]} /> */}
          </div>
        
        </div>
      </div>
    </>
  );
};
export default Concepts;
