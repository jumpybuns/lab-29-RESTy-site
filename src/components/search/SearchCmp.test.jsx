import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchCmp from './SearchCmp';

describe('SearchCmp component', () => {
  afterEach(() => cleanup());
  it('renders SearchCmp', () => {
    const { asFragment } = render(
      <SearchCmp
        requestURL="reqeustURL"
        requestBody="requestBody"
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
