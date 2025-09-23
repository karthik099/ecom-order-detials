import React from 'react';
import type { Order } from '../OrdersTable/OrdersTable';

const OrdersTableRow: React.FC<{ order: Order }> = ({ order }) => (
  <tr className="hover:bg-gray-50">
  <td className="px-4 py-2 text-sm text-gray-800 text-left">{order.orderId}</td>
  <td className="px-4 py-2 text-sm text-gray-800 text-left">{order.customer}</td>
  <td className="px-4 py-2 text-sm text-gray-800 text-left">{order.orderItem}</td>
  <td className="px-4 py-2 text-sm text-gray-800 text-left">{order.deliveryDate}</td>
  <td className="px-4 py-2 text-sm text-gray-800 text-left">{order.deliveryPricing}</td>
  <td className="px-4 py-2 text-sm text-left">
    <button
      className={
        `px-4 py-1 rounded-md border font-semibold transition-colors shadow-sm ` +
  (order.status === 'Completed' ? 'text-green-700 border-green-200 bg-green-50 hover:bg-green-100' :
   order.status === 'Canceled' ? 'text-red-700 border-red-200 bg-red-50 hover:bg-red-100' :
   order.status === 'Continuing' ? 'text-blue-900 border-blue-200 bg-blue-50 hover:bg-blue-100' :
   order.status === 'Restitute' ? 'text-yellow-700 border-yellow-200 bg-yellow-50 hover:bg-yellow-100' :
   'text-gray-800 border-gray-200 bg-gray-50 hover:bg-gray-100')
      }
      disabled
      style={{ minWidth: 100 }}
    >
      {order.status}
    </button>
  </td>
  </tr>
);

export default OrdersTableRow;
