import '@testing-library/jest-dom';
import { waitFor, render, screen } from '@testing-library/react';

import List from '.';

describe('List', () => {
  it('renders list', () => {
    render(<List />);

    const list = screen.getByTestId('list');

    waitFor(() => expect(list).toBeInTheDocument());
  });
});
