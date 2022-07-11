import React from "react"

export const NamingList = () => {
  const names = ['Bruce', 'Clark', 'Diana']

  return(
    <div>
      {
        names.map((name) => {
          return <h2 key = {name}> {name}</h2>
        })
      }
    </div>
  )
}