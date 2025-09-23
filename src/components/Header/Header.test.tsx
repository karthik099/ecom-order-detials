import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders app name', () => {
    render(<Header />);
    expect(screen.getByText(/eCom App/i)).toBeInTheDocument();
  });
});
