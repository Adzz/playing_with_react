import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { happyPink } from '../../styles/colors';

const styles = {
  textDecoration: `underline ${happyPink}`,
  label: {
    paddingLeft: '0px',
  },
};

const Delete = ({ resourceToDelete, style }) => (
  <FlatButton
    label={`Delete ${resourceToDelete}`}
    secondary
    style={Object.assign({}, styles, style)}
    labelStyle={styles.label}
  />
);

/* eslint-disable */
Delete.propTypes = {
  resourceToDelete: PropTypes.string.isRequired,
  style: PropTypes.object,
};
/* eslint-enable */

Delete.defaultProps = {
  style: {},
};

export default Radium(Delete);
