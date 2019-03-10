import React from 'react';
import Smurf from '../components/Smurf';
import { connect } from 'react-redux';
import { getData } from '../actions';

const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
      smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);

// export default function SmurfList(props) {
//   return (
//     <div>
//       {props.smurfs.map(smurf => (
//           <Smurf key={smurf.id} smurf={smurf}/>
//       ))}
//     </div>
//   )
// }