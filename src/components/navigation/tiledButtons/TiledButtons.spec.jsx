import React from 'react';
import { shallow } from 'enzyme';

import { TiledButtons } from './TiledButtons';

describe('<TiledButtons />', () => {
  it('renders the navbar', () => {
    shallow(<TiledButtons />);
  });
});
