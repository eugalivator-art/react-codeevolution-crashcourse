import React from 'react'

// child component will call function in parent

export const ChildComponent = (props) => {

  const isLoggedIn = false

 return (
  <div>
   <input type="text"></input>
    <button onClick = {() =>props.greetHandler('masses fun')}>Child</button>

    Welcome {isLoggedIn ?"Vishwa Nigaa" : "guest"}

    {/* {isLoggedIn && "Vishwuuuwuw"} */}
    {/* for only rendering when true, shortcircuit conditional rendering */}
 </div>
 )
 

}
