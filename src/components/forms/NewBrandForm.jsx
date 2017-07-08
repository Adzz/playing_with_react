import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import TextField from 'material-ui/TextField';
import dialogForm from '../../HOCs/dialogForm/DialogForm';

const styles = {
  input: {
    width: '100%',
  },
};

const NewBrandForm = ({ formData, errors, handleFormUpdate, buttons }) => (
  <form>
    <TextField
      hintText="Brand name"
      name="brand[name]"
      floatingLabelText="Please enter the brand Name then press save"
      style={styles.input}
      value={formData['brand[name]']}
      errorText={errors.errors ? errors.errors.name : ''}
      onChange={handleFormUpdate}
      required
    />
    {buttons}
  </form>
);

NewBrandForm.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.element).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  handleFormUpdate: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    'brand[name]': PropTypes.string,
  }).isRequired,
};

export default Radium(dialogForm(NewBrandForm, 'Add a brand'));
