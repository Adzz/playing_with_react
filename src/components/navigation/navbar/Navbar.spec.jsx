import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('renders the navbar', () => {
    shallow(<Navbar />);
  });
});
