import React from 'react';
import PropTypes from 'prop-types';

function Display({ total, operation, next }) {
  return (
    <div className="result">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;
