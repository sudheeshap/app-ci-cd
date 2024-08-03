import '@testing-library/jest-dom';
import { waitFor, render, screen } from '@testing-library/react';

import Home from './page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId('header');

    waitFor(() => expect(heading).toBeInTheDocument());
  });
});
