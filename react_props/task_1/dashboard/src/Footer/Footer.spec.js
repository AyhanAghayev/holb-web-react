import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component tests', () => {
  test('renders Footer without crashing', () => {
    render(<Footer />);
  });

  test('renders the correct copyright text when isIndex is true', () => {
    render(<Footer isIndex />);

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(
        new RegExp(`^Copyright ${currentYear} - Holberton School$`, 'i')
      )
    ).toBeInTheDocument();
  });
});