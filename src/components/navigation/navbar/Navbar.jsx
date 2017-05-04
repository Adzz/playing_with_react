import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { white, steelBlue } from '../../../styles/colors';

injectTapEventPlugin();

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      options: [
        { id: 1, title: 'Data Management', slug: 'data_management' },
        { id: 2, title: 'Order Creation', slug: 'order_creation' },
        { id: 3, title: 'Brand Product Catalogue', slug: 'brand_product_catalogue' },
      ],
      selectedOption: { id: 1, title: 'Data Management', slug: 'data_management' },
    };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOptionTouchTap(option) {
    this.setState({ selectedOption: option, open: false });
  }

  renderMenuItems() {
    return this.state.options.map(option => (
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
        <Toolbar style={{ backgroundColor: steelBlue }}>
          <ToolbarGroup style={{ width: '100%' }}>
            <NavigationMenuIcon
              onTouchTap={() => this.handleToggle()}
              style={{ color: white }}
            />
            <Drawer
              docked={false}
              width={250}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              {this.renderMenuItems()}
            </Drawer>
            <ToolbarTitle
              text={this.state.selectedOption.title}
              style={{ color: white, margin: '0 auto' }}
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

