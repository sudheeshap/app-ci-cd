import '@testing-library/jest-dom';
import { waitFor, render, screen } from '@testing-library/react';

import Home from './page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const title = screen.getByText(/Sign Up/);

    waitFor(() => expect(title).not.toBeNull());
  });
});
