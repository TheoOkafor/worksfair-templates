import React from 'react';
import { cleanup, render } from '@testing-library/react';

import PersonalPerfect from '../Diamond';
import { website } from '../../utils';

afterEach(cleanup);

const arrangement = [
  {
    id: 'hero',
    name: 'Hero',
  },
  {
    id: 'introduction',
    name: 'Introduction',
  },
  {
    id: 'worksSettings',
    name: 'Works',
  },
  {
    id: 'testimonials',
    name: 'testimonials',
  },
  {
    id: 'callToAction',
    name: 'Call to action',
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
