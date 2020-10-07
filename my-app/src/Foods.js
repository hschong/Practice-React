import React from 'react';
import PropTypes from 'prop-types';

Foods.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// function Food(props) {
function Foods({ name, image, rating }) {
  // console.log(props.name);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={image} width='400' alt={name} />
    </div>
  );
}

export default Foods;
