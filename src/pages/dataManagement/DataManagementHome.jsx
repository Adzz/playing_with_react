import React from 'react';
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


const DataManagementHome = () => (
  <div style={styles.container} >
    <TiledButtons />
  </div>
);

export default Radium(DataManagementHome);
