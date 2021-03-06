import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import TiledButtons from '../../components/navigation/tiledButtons/TiledButtons';

const styles = {
  container: {
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexFlow: 'row wrap',
    height: 'calc(100vh - 56px)',
    alignItems: 'center',
  },
};

export const DataManagementHome = ({ match }) => (
  <div style={styles.container}>
    <TiledButtons match={match} />
  </div>
);

DataManagementHome.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }).isRequired,
};


export default Radium(DataManagementHome);
