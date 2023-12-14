import "./Examples.css";
import { useState } from "react";
{
  useState;
}
const Examples = () => {
  const [component, setComponent] = useState(false);
  const [jsx, setJsx] = useState(false);
  const [props, setProps] = useState(false);
  const [state, setState] = useState(false);
  const compClickHandler = () => {
    setComponent(true);
    setJsx(false);
    setProps(false);
    setState(false);
  };
  const jsxClickHandler = () => {
    setJsx(true);
    setProps(false);
    setComponent(false);
    setState(false);
  };
  const propsClickHandler = () => {
    setJsx(false);
    setProps(true);
    setComponent(false);
    setState(false);
  };
  const stateClickHandler = () => {
    setJsx(false);
    setProps(false);
    setComponent(false);
    setState(true);
  };
  return (
    <>
      <div className="example">Examples</div>
      <div className="buttons">
        <div>
          <button onClick={compClickHandler}>Component</button>
        </div>
        <div>
          <button onClick={jsxClickHandler}>JSX</button>
        </div>
        <div>
          <button onClick={propsClickHandler}>Props</button>
        </div>
        <div>
          <button onClick={stateClickHandler}>State</button>
        </div>
      </div>
      {component && (
        <div className="content">
          Compound components are a pattern in React, where several components
          are used together such that they share an implicit state that allows
          them to communicate with each other in the background. This pattern is
          used when multiple components work together to have a shared state and
          handle logic together.
        </div>
      )}
      {jsx && (
        <div className="content">
          JSX allows us to write HTML elements in JavaScript and place them in
          the DOM without any createElement() and/or appendChild() methods. JSX
          converts HTML tags into react elements. You are not required to use
          JSX, but JSX makes it easier to write React applications
        </div>
      )}
      {props && (
        <div className="content">
          React allows us to pass information to a Component using something
          called props (which stands for properties). Props are objects which
          can be used inside a component. Sometimes we need to change the
          content inside a component. Props come to play in these cases, as they
          are passed into the component and the user..
        </div>
      )}
      {state && (
        <div className="content">
          A state is a variable that exists inside a component, that cannot be
          accessed and modified outside the component, and can only be used
          inside the component. Works very similarly to a variable that is
          declared inside a function that cannot be accessed outside the scope
          of the function in normal javascript. State Can be modified using
          this.setState. The state can be asynchronous. Whenever this.setState
          is used to change the state class is rerender itself. Let’s see with
          the help of an example:
        </div>
      )}
    </>
  );
};
export default Examples;
