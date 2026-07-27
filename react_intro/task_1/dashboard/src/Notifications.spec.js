import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders a button', () => {
    render(<Notifications />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('renders 3 notification items', () => {
    render(<Notifications />);

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(3);
  });
});
