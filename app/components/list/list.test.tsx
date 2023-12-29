import '@testing-library/jest-dom';
import { waitFor, render, screen } from '@testing-library/react';

import List from '.';

window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: 'title1' }]),
  })
) as jest.Mock;

describe('List', () => {
  it('renders list', () => {
    render(<List />);

    const list = screen.getByTestId('list');

    waitFor(() => expect(list).toBeInTheDocument());
    waitFor(() => {
      const post = screen.getByText('title1');
      expect(post).toBeInTheDocument();
    });
  });
});
