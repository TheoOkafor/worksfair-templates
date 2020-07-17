import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Home from '../Home';

afterEach(cleanup);

describe('Home.js', () => {
  test('test that it renders correctly', () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
});
