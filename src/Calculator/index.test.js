import { render, screen } from '@testing-library/react';
import Calculator from './';

test('renders right result', () => {
  render(<Calculator number1={10} number2={20} />);
  const element = screen.getByText(/ = /);
  expect(element).toHaveTextContent('10 + 20 = 30');
});
