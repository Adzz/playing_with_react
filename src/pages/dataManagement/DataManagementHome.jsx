import React from 'react';
import TiledButtons from '../../components/navigation/tiledButtons/TiledButtons';

const styles = {
  container: {
    backgroundColor: 'whitesmoke',
    height: 'calc(100vh - 56px)',
  },
};


const DataManagementHome = () => (
  <div style={styles.container} >
    <TiledButtons />
  </div>
);

export default DataManagementHome;
