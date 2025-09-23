import React from 'react';
import Tabs from '../Tabs/Tabs';
import FilterInput from '../FilterInput/FilterInput';
import OrdersTableHeader from '../OrdersTableHeader/OrdersTableHeader';
import OrdersTableRow from '../OrdersTableRow/OrdersTableRow';
import Pagination from '../Pagination/Pagination';

export type OrderStatus = 'Completed' | 'Continuing' | 'Restitute' | 'Canceled';

export interface Order {
  orderId: string;
  customer: string;
  orderItem: string;
  deliveryDate: string;
  deliveryPricing: number;
  status: OrderStatus;
}

export interface OrderFilters {
  orderId?: string;
  customer?: string;
  orderItem?: string;
  deliveryDateStart?: string;
  deliveryDateEnd?: string;
  deliveryPricingMin?: number;
  deliveryPricingMax?: number;
  status?: OrderStatus[];
}

export interface OrdersTableProps {
  orders: Order[];
  filters: OrderFilters;
  onFilterChange: (filters: OrderFilters) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const statusTabs = [
  { label: 'All Orders', value: 'All' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Continuing', value: 'Continuing' },
  { label: 'Restitute', value: 'Restitute' },
  { label: 'Canceled', value: 'Canceled' },
];

export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  filters,
  onFilterChange,
  currentPage,
  totalPages,
  onPageChange,
  activeTab,
  onTabChange,
}) => {
  const [sorts, setSorts] = React.useState<Array<{ field: string; order: 'asc' | 'desc' }>>([]);

  const handleSort = (field: string) => {
    setSorts(prev => {
      const existing = prev.find(s => s.field === field);
      if (existing) {
        // Toggle order or move to front
        const newOrder = existing.order === 'asc' ? 'desc' : 'asc';
        return [{ field, order: newOrder }, ...prev.filter(s => s.field !== field)];
      } else {
        return [{ field, order: 'asc' }, ...prev];
      }
    });
  };

  const sortedOrders = React.useMemo(() => {
    if (sorts.length === 0) return orders;
    return [...orders].sort((a, b) => {
      for (const sort of sorts) {
        const aValue = a[sort.field as keyof typeof a];
        const bValue = b[sort.field as keyof typeof b];
        if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [orders, sorts]);

  return (
    <div className="orders-page max-w-5xl mx-auto bg-white shadow-md px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 pt-4">Order Details</h2>
      <Tabs tabs={statusTabs} activeTab={activeTab} onTabChange={onTabChange} />
      <div className="mb-6 w-full">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#f8bd19] focus:ring-0 text-sm"
          placeholder="Search by Order ID, Customer, Order Item, Delivery Date, Delivery Pricing, Status..."
          value={filters.orderId || ''}
          onChange={e => onFilterChange({ ...filters, orderId: e.target.value })}
        />
      </div>
      <table className="orders-table w-full border rounded-lg overflow-hidden shadow">
        <OrdersTableHeader sorts={sorts} onSort={handleSort} />
        <tbody>
          {sortedOrders.map(order => (
            <OrdersTableRow key={order.orderId} order={order} />
          ))}
        </tbody>
      </table>
      <div className="py-6">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};
