import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Diamond from '../Diamond';
import { website } from '../../utils';

afterEach(cleanup);

const arrangement = [
  {
    id: 'hero',
    name: 'Hero',
  },
  {
    id: 'about',
    name: 'About',
    addons: ['aboutDesc', 'aboutContent'],
  },
  {
    id: 'services',
    name: 'Services',
  },
  {
    id: 'features',
    name: 'Features',
  },
  {
    id: 'team',
    name: 'team',
  },
  {
    id: 'quote',
    name: 'Quote',
  },
];

describe('Diamond.js', () => {
  test('test that it renders correctly with the given data', () => {
    const component = render(<Diamond website={website} />);
    expect(component).toMatchSnapshot();
  });

  test('test that it renders correctly without some sections', () => {
    website.metadata.arrangement = arrangement;
    const component = render(<Diamond website={website} />);
    expect(component).toMatchSnapshot();
  });
});
