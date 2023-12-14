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
      heading: <h1>Components</h1>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          similique iste ipsum repellat omnis aspernatur quos aut distinctio,
        </p>
      ),
    },
    {
      img:  jsx,
      heading: <h1>JSX</h1>,
      para: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          reprehenderit aperiam aspernatur. Debitis, totam illo.
        </p>
      ),
    },
    {
      img: props,
      heading: <h1>Props</h1>,
      para: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          fuga, exercitationem pariatur sunt laboriosam voluptate!
        </p>
      ),
    },
    {
      img:  state ,
      heading: <h1>State</h1>,
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
          <h1>Core Concepts</h1>
          <ConceptDes data={DummyData[0]} />
        </div>
      </div>
    </>
  );
};
export default Concepts;
