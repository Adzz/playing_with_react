import React, { Component } from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const styles = {
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


export class NewSupplierTerms extends Component {
  render() {
    return (
      <form>
        <div>
          <h3>Supplier Terms</h3>
          <TextField
            hintText="Pre-Order Discount"
            floatingLabelText="Pre-order discount"
            name="preOrderDiscount"
            style={styles.input}
            value={this.state.preOrderDiscount}
            errorText={this.props.errors.preOrderDiscount}
            onChange={this.props.handleFormUpdate}
            required
          />
          <TextField
            hintText="Re-Order Discount"
            floatingLabelText="Re order discount"
            style={styles.input}
            name="reOrderDiscount"
            value={this.state.reOrderDiscount}
            errorText={this.props.errors.reOrderDiscount}
            onChange={this.props.handleFormUpdate}
            required
          />
          <SelectField
            value={this.state.paymentDays}
            floatingLabelText="Payment Days"
            name="paymentDays"
            maxHeight={200}
            id="dropdown"
            onChange={(e, i, v) => this.props.handleFormUpdate(e, i, v, 'paymentDays')}
            required
          >
            <MenuItem value="30 days" key="1" primaryText="30 days" />
            <MenuItem value="45 days" key="2" primaryText="45 days" />
            <MenuItem value="60 days" key="3" primaryText="60 days" />
            <MenuItem value="75 days" key="4" primaryText="75 days" />
            <MenuItem value="90 days" key="5" primaryText="90 days" />
            <MenuItem value="120 days" key="6" primaryText="120 days" />
            <MenuItem value="60 EOM" key="7" primaryText="60 EOM" />
            <MenuItem value="Payment Plan" key="8" primaryText="Payment Plan" />
            <MenuItem value="Pro Forma" key="9" primaryText="Pro Forma" />
            <MenuItem value="100% bol" key="10" primaryText="100% bol" />
            <MenuItem value="Ex-works" key="11" primaryText="Ex-works" />
            <MenuItem value="FOB 30" key="12" primaryText="FOB 30" />
            <MenuItem value="FOB 60" key="13" primaryText="FOB 60" />
          </SelectField>
          <TextField
            hintText="Settlement Discount %"
            floatingLabelText="Settlement discount %"
            style={styles.input}
            name="settlementDiscount"
            value={this.state.settlementDiscount}
            errorText={this.props.errors.settlementDiscount}
            onChange={this.props.handleFormUpdate}
            required
          />
          <TextField
            hintText="Settlement Days"
            floatingLabelText="Settlement Days"
            style={styles.input}
            name="settlementDays"
            value={this.state.settlementDays}
            errorText={this.props.errors.settlementDays}
            onChange={this.props.handleFormUpdate}
            required
          />
          <TextField
            hintText="Faulty Returns Discount"
            floatingLabelText="Faulty Returns Discount"
            style={styles.input}
            name="faultyReturnsDiscount"
            value={this.state.faultyReturnsDiscount}
            errorText={this.props.errors.faultyReturnsDiscount}
            onChange={this.props.handleFormUpdate}
            required
          />
          <TextField
            hintText="Credit Limit"
            floatingLabelText="Credit Limit"
            style={styles.input}
            name="creditLimit"
            value={this.state.creditLimit}
            errorText={this.props.errors.creditLimit}
            onChange={this.props.handleFormUpdate}
            required
          />
          <TextField
            hintText="Marketing Support"
            floatingLabelText="Marketing Support"
            style={styles.input}
            name="marketingSupport"
            value={this.state.marketingSupport}
            errorText={this.props.errors.marketingSupport}
            onChange={this.props.handleFormUpdate}
            required
          />
          <div style={styles.fileUpload}>
            <label htmlFor="doc-terms">Document Proving Terms: </label>
            <input
              type="file"
              label="Document Proving Terms"
              id="doc-terms"
              onChange={this.props.handleFormUpdate}
              style={styles.fileUploadBtn}
              required
            />
          </div>
        </div>
        {this.props.buttons}
      </form>
    );
  }

}

NewSupplierTerms.propTypes = {
  buttons: PropTypes.element.isRequired,
  handleFormUpdate: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    preOrderDiscount: PropTypes.string,
    reOrderDiscount: PropTypes.string,
    paymentDays: PropTypes.string,
    settlementDiscount: PropTypes.string,
    settlementDays: PropTypes.string,
    faultyReturnsDiscount: PropTypes.string,
    creditLimit: PropTypes.string,
    marketingSupport: PropTypes.string,
  }),
};


NewSupplierTerms.defaultProps = {
  errors: {
    preOrderDiscount: '',
    reOrderDiscount: '',
    paymentDays: '',
    settlementDiscount: '',
    settlementDays: '',
    faultyReturnsDiscount: '',
    creditLimit: '',
    marketingSupport: '',
  },
};


export default Radium(NewSupplierTerms);
