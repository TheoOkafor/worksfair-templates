import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { cleanup, render } from '@testing-library/react';

import Home from '../Home';

afterEach(cleanup);

describe('Home.js', () => {
  test('test that it renders correctly', () => {
    const component = render(
      <Router>
        <Home />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
