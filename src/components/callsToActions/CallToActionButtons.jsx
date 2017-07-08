import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import Save from '../buttons/Save';
import Cancel from '../buttons/Cancel';
import Delete from '../buttons/Delete';

const styles = {
  container: {
    width: 'fit-content',
    position: 'fixed',
    right: '20vw',
    bottom: '30px',
  },
  cancel: {
    marginRight: '10px',
  },
  save: {
    marginLeft: '10px',
  },
  delete: {
    marginTop: '2vh',
  },
};

const CallToActionButtons = ({ resourceToDelete, saveAction, cancelAction }) => (
  <div style={styles.container} >
    <Cancel style={styles.cancel} cancelAction={cancelAction} />
    <Save style={styles.save} saveAction={saveAction} />
    <br />
    <Delete resourceToDelete={resourceToDelete} style={styles.delete} />
  </div>
);

CallToActionButtons.propTypes = {
  resourceToDelete: PropTypes.string.isRequired,
  saveAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
};

export default Radium(CallToActionButtons);
