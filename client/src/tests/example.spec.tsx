import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Generic truthy statement', () => {
  it('True must equal true', () => {
    render(<App />);

    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });
});