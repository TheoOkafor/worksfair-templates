import React from 'react';
import {cleanup, render} from '@testing-library/react';

import NotFound from '../NotFound';

afterEach(cleanup);

describe('NotFound.js', () => {
  test('test that it renders correctly', () => {
    const component = render(
      <NotFound />
    );
    expect(component).toMatchSnapshot();
  });
});
