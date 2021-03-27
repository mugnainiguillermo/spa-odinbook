import { render, screen } from '@testing-library/react';
import HomePage from 'pages/HomePage';

test('renders HomePage', () => {
  render(<HomePage />);
  const text = screen.getByText(/HomePage/i);
  expect(text).toBeInTheDocument();
});
