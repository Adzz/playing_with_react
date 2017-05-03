import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { white, steelBlue } from '../../../styles/colors';
import MainNavigationPopover from '../mainNavigationPopover/MainNavigationPopover';

injectTapEventPlugin();

export const Navbar = props => (
  <div>
    <Toolbar style={{ backgroundColor: steelBlue }}>
      <ToolbarGroup style={{ width: '100%' }}>
        <MainNavigationPopover
          style={{ color: white }}
        />
        <ToolbarTitle
          text={props.selectedOption.title}
          style={{ color: white, margin: '0 auto' }}
        />
      </ToolbarGroup>
    </Toolbar>
  </div>
);

Navbar.propTypes = {
  selectedOption: PropTypes.shape({
    id: PropTypes.int,
    title: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    selectedOption: state.mainNavPopover.selectedOption,
  };
}

export default connect(mapStateToProps)(Radium(Navbar));
