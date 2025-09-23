import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OrdersTableRow from './OrdersTableRow';
import type { OrderStatus } from '../OrdersTable/OrdersTable';

describe('OrdersTableRow', () => {
  it('renders order row', () => {
    const order = { orderId: 'ORD001', customer: 'Alice', orderItem: 'Laptop', deliveryDate: '2025-09-20', deliveryPricing: 50, status: 'Completed' as OrderStatus };
    render(<OrdersTableRow order={order} />);
    expect(screen.getByText('ORD001')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });
});
