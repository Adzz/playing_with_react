import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const Save = ({ style, saveAction }) => (
  <RaisedButton
    label="Save"
    primary
    style={style}
    onTouchTap={saveAction}
  />
);

/* eslint-disable */
Save.propTypes = {
  style: PropTypes.object,
  saveAction: PropTypes.func.isRequired,
};
/* eslint-enable */

Save.defaultProps = {
  style: {},
};


export default Radium(Save);
