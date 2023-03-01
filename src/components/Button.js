import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value }) {
  return <input type="button" value={value} />;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
