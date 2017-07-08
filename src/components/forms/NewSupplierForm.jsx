import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import TextField from 'material-ui/TextField';
import dialogForm from '../../HOCs/dialogForm/DialogForm';

const styles = {
  formButtons: {
    textAlign: 'right',
  },
  input: {
    width: '100%',
    margin: '0 auto',
  },
  fileUpload: {
    marginTop: '20px',
  },
  fileUploadBtn: {
    marginTop: '10px',
  },
};


const NewSupplierForm = ({ errors, formData, handleFormUpdate, buttons }) => (
  <form>
    <div>
      <TextField
        hintText="Supplier name"
        floatingLabelText="Please enter the supplier name"
        style={styles.input}
        name="supplierName"
        value={formData.supplierName}
        errorText={errors.errors ? errors.errors.name : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="Physical Address"
        floatingLabelText="Address"
        style={styles.input}
        name="physicalAddress"
        value={formData.physicalAddress}
        errorText={errors.errors ? errors.errors.physicalAddress : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="Account Number"
        floatingLabelText="Account Number"
        style={styles.input}
        name="accountNumber"
        value={formData.accountNumber}
        errorText={errors.errors ? errors.errors.accountNumber : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="Email Addresses For PO"
        floatingLabelText="Email Addresses For PO"
        style={styles.input}
        name="emailAddressesPO"
        value={formData.emailAddressesPO}
        errorText={errors.errors ? errors.errors.emailAddressesPO : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="Shipping / Duty"
        floatingLabelText="Shipping / Duty"
        style={styles.input}
        name="shippingDuty"
        value={formData.shippingDuty}
        errorText={errors.errors ? errors.errors.shippingDuty : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="Invoice Currency (default £)"
        floatingLabelText="Invoice Currency (default £)"
        style={styles.input}
        name="invoiceCurrency"
        value={formData.invoiceCurrency}
        errorText={errors.errors ? errors.errors.invoiceCurrency : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="B2B Website and Login Details"
        floatingLabelText="B2B Website and Login Details"
        style={styles.input}
        name="b2bWebsiteLogin"
        value={formData.b2bWebsiteLogin}
        errorText={errors.errors ? errors.errors.b2bWebsiteLogin : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="FTP website and Login Details"
        floatingLabelText="FTP website and Login Details"
        style={styles.input}
        name="FTPWebsiteLogin"
        value={formData.FTPWebsiteLogin}
        errorText={errors.errors ? errors.errors.FTPWebsiteLogin : ''}
        onChange={handleFormUpdate}
        required
      />
      <TextField
        hintText="Other"
        floatingLabelText="Other"
        style={styles.input}
        name="other"
        value={formData.other}
        errorText={errors.errors ? errors.errors.other : ''}
        onChange={handleFormUpdate}
        required
      />
    </div>
    {buttons}
  </form>
);

NewSupplierForm.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.element).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  handleFormUpdate: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    'supplier[name]': PropTypes.string,
  }).isRequired,
};


export default Radium(dialogForm(NewSupplierForm, 'Add a Supplier'));
