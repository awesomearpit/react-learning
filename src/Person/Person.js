import React from "react";

const person = props => {
  return (
    <div>
      <h4>
        HI I am {props.name} and My age is {props.age} .
      </h4>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
