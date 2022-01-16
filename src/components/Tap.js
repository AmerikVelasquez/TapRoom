import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p>{props.price}$</p>
        <p>{props.alcoholContent}%</p>
        <p>pints: {props.pints}</p>
      </div>
    </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints : PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func
}

export default Tap;
