import React, { Component } from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getRequest } from '../../utils/requests/requestActions';
import DataTable from '../../components/dataTable/DataTable';
import NewBrandForm from '../../components/forms/NewBrandForm';

const styles = {
  container: {
    width: '60vw',
    margin: '0 auto',
    height: '60vh',
    position: 'relative',
    top: '5vh',
  },
  idHeaderStyle: {
    width: '100px',
  },
  newBrandForm: {
    input: {
      width: '100%',
    },
    buttons: {
      textAlign: 'right',
    },
  },
};

export class BrandsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeader: [
        { key: 1, title: 'ID', tooltip: 'Brand ID', style: styles.idHeaderStyle },
        { key: 2, title: 'Brand', tooltip: 'Brand Name' },
      ],
      openDialog: false,
      url: 'http://composer.dev/brands',
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    this.props.getRequest(this.state.url);
  }

  handleClose() {
    this.setState({ openDialog: false });
  }

  handleOpen() {
    this.setState({ openDialog: true });
  }

  render() {
    if (this.props.redirect) {
      const id = this.props.createdBrand.brand.id;
      return <Redirect to={`/data_management/brands_and_suppliers/brands/${id}`} />;
    }

    return (
      <div style={styles.container}>
        <DataTable
          tableData={this.props.brandsList}
          tableHeaders={this.state.tableHeader}
          onButtonClick={this.handleOpen}
          elementBaseURL="brands_and_suppliers/brands/"
          height="60vh"
        />
        <NewBrandForm
          openDialog={this.state.openDialog}
          handleClose={this.handleClose}
          postURL={this.state.url}
        />
      </div>
    );
  }
}

BrandsListContainer.propTypes = {
  getRequest: PropTypes.func,
  brandsList: PropTypes.arrayOf(PropTypes.object),
  createdBrand: PropTypes.shape({
    brand: PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
    }),
  }),
  redirect: PropTypes.bool,
};

BrandsListContainer.defaultProps = {
  getRequest,
  brandsList: [],
  createdBrand: {},
  redirect: false,
};

function mapStateToProps(state) {
  return {
    brandsList: state.request.getRequestResponse.brands,
    createdBrand: state.request.createdResource,
    redirect: state.request.redirect,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(BrandsListContainer));
