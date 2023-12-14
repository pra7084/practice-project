import comp from "../../src/assets/components.png";
import jsx from "../../src/assets/jsx-ui.png";
import props from "../../src/assets/config.png";
import state from "../../src/assets/state-mgmt.png";
import "./Concepts.css";
import ConceptDes from "./ConceptDes";

const Concepts = () => {
  const DummyData = [
    {
      img: comp,
      heading: <p>Components</p>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          similique iste ipsum repellat omnis aspernatur quos aut distinctio,
        </p>
      ),
    },
    {
      img:  jsx,
      heading: <p>JSX</p>,
      para: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          reprehenderit aperiam aspernatur. Debitis, totam illo.
        </p>
      ),
    },
    {
      img: props,
      heading: <p>Props</p>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          fuga, exercitationem pariatur sunt laboriosam voluptate!
        </p>
      ),
    },
    {
      img:  state ,
      heading: <p>State</p>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut
          voluptatum nesciunt dolores, quod libero!
        </p>
      ),
    },
  ];
  return (
    <>
      <div className="outer">
        <div className="blackbox">
          <div className="core">Core Concepts</div>
          <div className="conceptdes">
                 <ConceptDes data={DummyData[0]} />
          <ConceptDes data={DummyData[1]} />
           <ConceptDes data={DummyData[2]} />
            {/* <ConceptDes data={DummyData[3]} /> */}
          
          </div>
     
         
        </div>
      </div>
    </>
  );
};
export default Concepts;
