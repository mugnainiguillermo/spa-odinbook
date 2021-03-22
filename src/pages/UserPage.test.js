import { render, screen } from '@testing-library/react';
import UserPage from 'pages/UserPage';

test('renders UserPage', () => {
  render(<UserPage />);
  const text = screen.getByText(/UserPage/i);
  expect(text).toBeInTheDocument();
});
