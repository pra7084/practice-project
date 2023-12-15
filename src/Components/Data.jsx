const Data=
    {
        component:     <div className="content">Compound components are a pattern in React, where several components
          are used together such that they share an implicit state that allows
          them to communicate with each other in the background. This pattern is
          used when multiple components work together to have a shared state and
          handle logic together.</div>,
             jsx:  <div className="content">
          JSX allows us to write HTML elements in JavaScript and place them in
          the DOM without any createElement() and/or appendChild() methods. JSX
          converts HTML tags into react elements. You are not required to use
          JSX, but JSX makes it easier to write React applications
        </div>,

         props:     <div className="content">
          React allows us to pass information to a Component using something
          called props (which stands for properties). Props are objects which
          can be used inside a component. Sometimes we need to change the
          content inside a component. Props come to play in these cases, as they
          are passed into the component and the user..
        </div>,
          state:    <div className="content">
          A state is a variable that exists inside a component, that cannot be
          accessed and modified outside the component, and can only be used
          inside the component. Works very similarly to a variable that is
          declared inside a function that cannot be accessed outside the scope
          of the function in normal javascript. State Can be modified using
          this.setState. The state can be asynchronous. Whenever this.setState
          is used to change the state class is rerender itself. Let’s see with
          the help of an example:
        </div>,
    } 
export default Data;