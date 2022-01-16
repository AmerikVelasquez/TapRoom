import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props) {
  const {tap, onClickingDecrease} = props;
  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.name}</h3>
      <p>{tap.brand}</p>
      <p>{tap.price}$</p>
      <p>{tap.alcoholContent}%</p>
      <p>pints remaining: {tap.pints}</p>
      <button onClick = {() => onClickingDecrease(tap.id)}>Buy Pint</button>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDecrease:PropTypes.func
}

export default TapDetail;