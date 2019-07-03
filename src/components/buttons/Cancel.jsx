import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const Cancel = ({ style, cancelAction }) => (
  <RaisedButton label="Cancel" primary style={style} onTouchTap={cancelAction} />
);

/* eslint-disable */
Cancel.propTypes = {
  style: PropTypes.object,
  cancelAction: PropTypes.func.isRequired,
};
/* eslint-enable */


Cancel.defaultProps = {
  style: {},
};

export default Radium(Cancel);
