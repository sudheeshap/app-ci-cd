import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />);

    const heading = screen.getByTestId('header');

    expect(heading).toBeInTheDocument();
  });
});
