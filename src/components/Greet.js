import React from "react";

export const Greet = (props) => {
  const good = "number"
  return (
  <>
  <div>
  <h1>Hellow Bro {props.name}</h1>
  {props.children}
  </div>
  </>
  )
}

// export default function Greet(){} default export