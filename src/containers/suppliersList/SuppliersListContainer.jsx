import React, { Component } from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getRequest } from '../../utils/requests/requestActions';
import DataTable from '../../components/dataTable/DataTable';
import NewSupplierForm from '../../components/forms/NewSupplierForm';

const styles = {
  idHeaderStyle: {
    width: '200px',
  },
  dataTable: {
    width: '60vw',
    margin: '7vh auto 0 auto',
  },
};

export class SuppliersListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeader: [
        { key: 1, title: 'ID', tooltip: 'Supplier ID', style: styles.idHeaderStyle },
        { key: 2, title: 'Supplier Name', tooltip: 'Supplier Name' },
      ],
      openDialog: false,
      url: 'http://composer.dev/brand_suppliers/',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.getRequest(
      `http://composer.dev/suppliers?q[brand_suppliers_brand_id_eq]=/${this.props.brand.id}`,
    );
  }

  handleOpen() {
    this.setState({ openDialog: true });
  }

  handleClose() {
    this.setState({ openDialog: false });
  }

  render() {
    return (
      <div style={styles.dataTable}>
        <DataTable
          tableData={this.props.suppliersList}
          tableHeaders={this.state.tableHeader}
          onButtonClick={this.handleOpen}
          elementBaseURL="brands_and_suppliers/suppliers/"
          height="30vh"
        />
        <NewSupplierForm
          openDialog={this.state.openDialog}
          handleClose={this.handleClose}
          postURL="http://composer.dev/suppliers"
        />
      </div>
    );
  }
}

SuppliersListContainer.propTypes = {
  getRequest: PropTypes.func,
  suppliersList: PropTypes.arrayOf(PropTypes.object),
  brand: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

SuppliersListContainer.defaultProps = {
  getRequest,
  suppliersList: [],
};

function mapStateToProps(state) {
  return {
    suppliersList: state.request.getRequestResponse.suppliers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(SuppliersListContainer));
