import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders page info', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText(/Page 1 of 5/i)).toBeInTheDocument();
  });
});
