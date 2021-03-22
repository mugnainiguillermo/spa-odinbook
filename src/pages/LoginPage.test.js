import { render, screen } from '@testing-library/react';
import LoginPage from 'pages/LoginPage';

test('renders LoginPage', () => {
  render(<LoginPage />);
  const text = screen.getByText(/LoginPage/i);
  expect(text).toBeInTheDocument();
});
