import React, { Component } from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { postRequest } from '../../utils/requests/requestActions';

const styles = {
  formButtons: {
    textAlign: 'right',
  },
};

function dialogForm(FormFields, dialogTitle) {
  class DialogFormBase extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {},
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormUpdate = this.handleFormUpdate.bind(this);
    }

    handleSubmit() {
      this.props.postRequest(this.state.formData, this.props.postURL);
    }

    handleFormUpdate(event, index, value, n) {
      const target = event.target;
      let name = target.name;
      let val = index;

      if (value !== undefined) {
        val = value;
      }

      if (n !== undefined) {
        name = n;
      }

      const formData = Object.assign({}, this.state.formData, {
        [name]: val,
      });
      this.setState({
        formData,
      });
    }

    render() {
      const buttons = [
        <div style={styles.formButtons} key="1">
          <FlatButton
            label="Cancel"
            primary
            onTouchTap={this.props.handleClose}
          />
          <FlatButton
            label="Save"
            primary
            onTouchTap={this.handleSubmit}
          />
        </div>,
      ];

      return (
        <Dialog
          title={dialogTitle}
          modal
          autoScrollBodyContent
          open={this.props.openDialog}
        >
          <FormFields
            {...this.state}
            formData={this.state.formData}
            buttons={buttons}
            errors={this.props.errors}
            handleFormUpdate={this.handleFormUpdate}
            {...this.props}
          />
        </Dialog>
      );
    }
  }

  DialogFormBase.propTypes = {
    postRequest: PropTypes.func,
    errors: PropTypes.shape({
      errors: PropTypes.object,
    }).isRequired,
    openDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    postURL: PropTypes.string.isRequired,
  };

  DialogFormBase.defaultProps = {
    postRequest,
    errors: { errors: { name: '' } },
  };

  function mapStateToProps(state) {
    return {
      errors: state.errors,
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postRequest }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(Radium(DialogFormBase));
}


export default dialogForm;
