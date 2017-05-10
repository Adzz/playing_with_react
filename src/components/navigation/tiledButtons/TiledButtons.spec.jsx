import React from 'react';
import { shallow } from 'enzyme';

import { TiledButtons } from './TiledButtons';

describe('<TiledButtons />', () => {
  it('renders the navbar', () => {
    const match = { match: { url: '/test_url' } };
    shallow(<TiledButtons match={match} />);
  });
});
