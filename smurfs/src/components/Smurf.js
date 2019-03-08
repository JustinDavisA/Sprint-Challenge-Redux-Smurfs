import React from 'react';
import { connect } from 'react-redux';

const Smurf = props => {
    const { smurf } = props

    const deleteHandler = (e, id) => {
        e.preventDefault();
        props.deleteSmurf(id)
    }

    return (
        <div>
            <p>{`Name: ${smurf.name}`}</p>
            <p>{`Age: ${smurf.age}`}</p>
            <p>{`Email: ${smurf.height}`}</p>
            <button>Update</button>
            <button
                onClick={e => deleteHandler(e, smurf.id)}
                className="delete"
            >Delete</button>
        </div>
    )
}

export default connect(
    null,
    { deleteSmurf })(Smurf);