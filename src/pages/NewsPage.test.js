import { render, screen } from '@testing-library/react';
import NewsPage from 'pages/NewsPage';

test('renders NewsPage', () => {
  render(<NewsPage />);
  const text = screen.getByText(/NewsPage/i);
  expect(text).toBeInTheDocument();
});
