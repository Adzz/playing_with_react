import React from 'react';
import { shallow } from 'enzyme';

import { Breadcrumb } from './Breadcrumb';

describe('<Breadcrumb />', () => {
  it('renders the navbar', () => {
    const location = {
      pathname: '/test_ing/location',
      key: '123',
      search: 'search',
      hash: '#',
      state: {},
    };
    shallow(<Breadcrumb location={location} />);
  });
});
