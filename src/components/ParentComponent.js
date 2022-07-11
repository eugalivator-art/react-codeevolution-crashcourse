import React from 'react';
import {ChildComponent} from "./ChildComponent.js"

export const ParentComponent = () => {

  const greetParent = (child) => {
    alert("hello parent "+child)
  }

  return (
    <div>
      <ChildComponent greetHandler = {greetParent}/>
    </div>
  )
};
