import React from 'react';
import { shallow } from 'enzyme';

import { MainNavigationPopover } from './MainNavigationPopover';

describe('<MainNavigationPopover />', () => {
  it('renders the popover', () => {
    const options = [
      { id: 1, title: 'Data Management', slug: 'data_management' },
      { id: 2, title: 'Order Creation', slug: 'order_creation' },
    ];

    shallow(
      <MainNavigationPopover
        options={options}
      />,
    );
  });
});
