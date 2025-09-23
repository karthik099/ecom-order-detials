import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { OrdersTable, type OrderStatus } from './OrdersTable';

describe('OrdersTable', () => {
  const orders = [
    { orderId: 'ORD001', customer: 'Alice', orderItem: 'Laptop', deliveryDate: '2025-09-20', deliveryPricing: 50, status: 'Completed' as OrderStatus },
  ];
  it('renders order table', () => {
    render(
      <OrdersTable
        orders={orders}
        filters={{}}
        onFilterChange={() => {}}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        activeTab="All"
        onTabChange={() => {}}
      />
    );
    expect(screen.getByText('Order Details')).toBeInTheDocument();
    expect(screen.getByText('ORD001')).toBeInTheDocument();
  });
});
