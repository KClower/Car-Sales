import React from 'react';
import { connect } from 'react-redux';
import { removeCarFeature } from '../Actions/CarFeatureActions';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeCarFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeCarFeature })(AddedFeature);
