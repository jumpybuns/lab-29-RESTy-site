import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(
      <Search
        requestURL="reqeustURL"
        requestBody="requestBody"
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
