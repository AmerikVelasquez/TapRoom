import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.tapList.map((tap) =>
        <Tap
        whenTapClicked = {props.onTapSelection}
        name = {tap.name}
        price = {tap.price}
        brand = {tap.brand}
        alcoholContent = {tap.alcoholContent}
        pints = {tap.pints}
        id = {tap.id}
        key = {tap.id}
        />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection : PropTypes.func
};

export default TapList;
