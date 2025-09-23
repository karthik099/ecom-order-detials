import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OrdersTableHeader from './OrdersTableHeader';

describe('OrdersTableHeader', () => {
  it('renders all column headers', () => {
    render(<OrdersTableHeader sorts={[]} onSort={() => {}} />);
    expect(screen.getByText('Order ID')).toBeInTheDocument();
    expect(screen.getByText('Customer')).toBeInTheDocument();
    expect(screen.getByText('Order Item')).toBeInTheDocument();
    expect(screen.getByText('Delivery Date')).toBeInTheDocument();
    expect(screen.getByText('Delivery Pricing')).toBeInTheDocument();
    expect(screen.getByText('Delivery Status')).toBeInTheDocument();
  });
});
