import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./helper/utils', () => ({
  convertCode: jest.fn(),
  executeCode: jest.fn(),
  getOptimizedCode: jest.fn(),
  getSuggestions: jest.fn(),
}));
jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

test('renders the CodeToggle workspace', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /one workspace\. every language\./i })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/standard input/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /run code/i })).toBeInTheDocument();
});
