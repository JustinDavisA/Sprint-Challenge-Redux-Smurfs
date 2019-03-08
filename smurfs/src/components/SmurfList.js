import React from 'react'
import Smurf from './Smurf'

export default function SmurfList(props) {
  return (
    <div>
      {props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf}/>
      ))}
    </div>
  )
}