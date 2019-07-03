import React from 'react';
import Radium from 'radium';
import TextField from 'material-ui/TextField';
import Breadcrumb from '../../../components/navigation/breadcrumb/Breadcrumb';
import SuppliersListContainer from '../../../containers/suppliersList/SuppliersListContainer';

const styles = {
  form: {
    width: '60vw',
    margin: '0 auto',
    position: 'relative',
    top: '4vh',
  },
  disabledInput: {
    borderBottom: '',
  },
  input: {
    width: '100%',
  },
};

const AddBrand = () => (
  <div>
    <Breadcrumb location={location} />
    <form style={styles.form}>
      <TextField
        hintText="Brand name"
        floatingLabelText="Please enter the brand Name"
        style={styles.input}
      />
      <br />
      <TextField
        disabled
        hintText="Brand ID"
        style={styles.input}
        underlineDisabledStyle={styles.disabledInput}
      />
    </form>
    <SuppliersListContainer />
  </div>
);

export default Radium(AddBrand);
