import { render, screen } from '@testing-library/react';
import ProfilePage from 'pages/ProfilePage';

test('renders ProfilePage', () => {
  render(<ProfilePage />);
  const text = screen.getByText(/ProfilePage/i);
  expect(text).toBeInTheDocument();
});
