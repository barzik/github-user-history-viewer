import { render, screen } from '@testing-library/react';
import App from './App';

test('renders container', () => {
  render(<App />);
  const containerElement = screen.getByTestId('general-repo-container');
  expect(containerElement).toBeInTheDocument();
});
