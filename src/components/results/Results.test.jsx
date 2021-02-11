import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Results from './Results';

describe('Results component', () => {
  afterEach(() => cleanup());
  it('renders Results', () => {
    const { asFragment } = render(
      <Results
        onChange={jest.fn()}
        onSubmit={jest.fn()}
        url="www.google.com"
        method="get"
        body="{}"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
