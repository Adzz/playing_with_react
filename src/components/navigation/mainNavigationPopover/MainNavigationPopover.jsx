import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import { selectOption, openPopover, closePopover } from './MainNavigationPopoverActions';
import { white } from '../../../styles/colors';

export class MainNavigationPopover extends Component {
  constructor(props) {
    super(props);
    this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTitleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();
    this.props.openPopover(event.currentTarget);
  }

  handleOptionTouchTap(option) {
    this.props.selectOption(option);
    this.props.closePopover();
  }

  handleRequestClose() {
    this.props.closePopover();
  }

  renderMenuItems() {
    return this.props.options.map(option => (
      <Link to={`/${option.slug}`} key={option.id} style={{ textDecoration: 'none' }}>
        <MenuItem
          key={option.id}
          primaryText={option.title}
          onTouchTap={() => this.handleOptionTouchTap(option)}
        />
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <NavigationMenuIcon
          onTouchTap={this.handleTitleTouchTap}
          style={{ color: white }}
        />
        <Popover
          open={this.props.openBoolean}
          anchorEl={this.props.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            {this.renderMenuItems()}
          </Menu>
        </Popover>
      </div>
    );
  }
}

MainNavigationPopover.defaultProps = {
  openBoolean: false,
  anchorEl: null,
  selectOption,
  closePopover,
  openPopover,
};

MainNavigationPopover.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectOption: PropTypes.func,
  openBoolean: PropTypes.bool,
  anchorEl: PropTypes.instanceOf(<span />),
  closePopover: PropTypes.func,
  openPopover: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    options: state.mainNavPopover.options,
    openBoolean: state.mainNavPopover.openBoolean,
    anchorEl: state.mainNavPopover.anchorEl,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectOption, openPopover, closePopover }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(MainNavigationPopover));
