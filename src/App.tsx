
import { ordersData } from './data/ordersData';

const ORDERS_PER_PAGE = 10;

function filterOrders(orders: Order[], filters: OrderFilters, activeTab: string): Order[] {
  return orders.filter(order => {
    if (activeTab !== 'All' && order.status !== activeTab) return false;
    if (filters.orderId && !order.orderId.includes(filters.orderId)) return false;
    if (filters.customer && !order.customer.toLowerCase().includes(filters.customer.toLowerCase())) return false;
    if (filters.orderItem && !order.orderItem.toLowerCase().includes(filters.orderItem.toLowerCase())) return false;
    if (filters.deliveryDateStart && order.deliveryDate < filters.deliveryDateStart) return false;
    if (filters.deliveryDateEnd && order.deliveryDate > filters.deliveryDateEnd) return false;
    if (filters.deliveryPricingMin !== undefined && order.deliveryPricing < filters.deliveryPricingMin) return false;
    if (filters.deliveryPricingMax !== undefined && order.deliveryPricing > filters.deliveryPricingMax) return false;
    if (filters.status && filters.status.length > 0 && !filters.status.includes(order.status)) return false;
    return true;
  });
}

const App: React.FC = () => {
  const [filters, setFilters] = useState<OrderFilters>({});
  const [activeTab, setActiveTab] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredOrders = filterOrders(ordersData, filters, activeTab);
  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / ORDERS_PER_PAGE));
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * ORDERS_PER_PAGE, currentPage * ORDERS_PER_PAGE);

  const handleFilterChange = (newFilters: OrderFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
  <div className="app-container max-w-5xl mx-auto w-full p-4 md:p-8">
          <OrdersTable
            orders={paginatedOrders}
            filters={filters}
            onFilterChange={handleFilterChange}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

import './App.css';
import React, { useState } from 'react';
import { OrdersTable, type Order, type OrderFilters } from './components/OrdersTable/OrdersTable';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
export default App;
