import React from 'react';
import { shallow } from 'enzyme';

import { DataManagementHome } from './Home';

describe('<DataManagementHome />', () => {
  it('renders the navbar', () => {
    shallow(<DataManagementHome />);
  });
});
