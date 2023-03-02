import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { value, clickCallback } = this.props;
    return (
      <button type="button" onClick={clickCallback} name={value}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickCallback: PropTypes.func.isRequired,
};
