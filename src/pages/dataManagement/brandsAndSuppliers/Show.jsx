import React, { Component } from 'react';
import Radium from 'radium';
import TextField from 'material-ui/TextField';
import last from 'lodash/last';
import { getRequest, putRequest } from '../../../utils/requests/request';
import Breadcrumb from '../../../components/navigation/breadcrumb/Breadcrumb';
import SuppliersListContainer from '../../../containers/suppliersList/SuppliersListContainer';
import CallToActionButtons from '../../../components/callsToActions/CallToActionButtons';

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

export class ShowBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: {
        'brand[id]': ':)',
        'brand[name]': 'Loading Brand....',
      },
      url: 'http://composer.dev/brands',
      error: '',
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateBrand = this.updateBrand.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  componentDidMount() {
    const id = last(location.pathname.split('/'));
    getRequest(`${this.state.url}/${id}`).then(res => (
      this.setState({
        brand: { 'brand[id]': res.data.brand.id, 'brand[name]': res.data.brand.name },
        defaultData: { name: res.data.brand.name, id: res.data.brand.id },
      })),
    );
  }

  handleUpdate(event) {
    this.setState({
      brand: {
        'brand[id]': this.state.brand['brand[id]'],
        'brand[name]': event.target.value,
      },
    });
  }

  updateBrand() {
    putRequest(this.state.brand, `${this.state.url}/${this.state.brand['brand[id]']}`).catch(err =>
      this.setState({ error: err.name }),
    ).then(
      res => (
        this.setState({
          brand: {
            'brand[id]': res.data.brand.id,
            'brand[name]': res.data.brand.name,
          },
        })
      ),
    );
  }

  resetData() {
    this.setState({
      brand: {
        'brand[id]': this.state.defaultData.id,
        'brand[name]': this.state.defaultData.name,
      },
      error: ''
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb location={location} />
        <form style={styles.form}>
          <TextField
            hintText="Brand name"
            floatingLabelText="Please enter the brand Name"
            style={styles.input}
            errorText={this.state.error}
            onChange={this.handleUpdate}
            value={this.state.brand['brand[name]']}
          />
          <br />
          <TextField
            disabled
            hintText="Brand ID"
            style={styles.input}
            underlineDisabledStyle={styles.disabledInput}
            value={this.state.brand['brand[id]']}
          />
        </form>
        <SuppliersListContainer brand={this.state.brand} />
        <br />
        <CallToActionButtons
          resourceToDelete="brand"
          style={styles.ctas}
          saveAction={this.updateBrand}
          cancelAction={this.resetData}
        />
      </div>
    );
  }
}

export default Radium(ShowBrand);
