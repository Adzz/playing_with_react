import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from './Navbar';

describe('<Navbar />', () => {
  it('renders the navbar', () => {
    const selectedOption = { id: 1, title: 'Data Management', slug: 'data_management' };
    shallow(<Navbar selectedOption={selectedOption} />);
  });
});
