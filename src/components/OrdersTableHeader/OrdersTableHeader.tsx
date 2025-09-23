
interface OrdersTableHeaderProps {
  sorts: Array<{ field: string; order: 'asc' | 'desc' }>;
  onSort: (field: string) => void;
}

const columns = [
  { label: 'Order ID', field: 'orderId' },
  { label: 'Customer', field: 'customer' },
  { label: 'Order Item', field: 'orderItem' },
  { label: 'Delivery Date', field: 'deliveryDate' },
  { label: 'Delivery Pricing', field: 'deliveryPricing' },
  { label: 'Delivery Status', field: 'status' },
];

const OrdersTableHeader: React.FC<OrdersTableHeaderProps> = ({ sorts, onSort }) => (
  <thead className="bg-gray-100">
    <tr>
      {columns.map(col => {
        const sort = sorts.find(s => s.field === col.field);
        const sortIdx = sorts.findIndex(s => s.field === col.field);
        return (
          <th
            key={col.field}
            className={
              `px-4 py-2 text-left text-xs font-semibold text-gray-700 cursor-pointer select-none transition ` +
              (sort ? 'text-yellow-600' : '')
            }
            onClick={() => onSort(col.field)}
          >
            <span className="flex items-center gap-1">
              {col.label}
              {sort && (
                <span className="flex items-center">
                  <svg
                    className={`ml-1 w-3 h-3 ${sort.order === 'asc' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-xs text-gray-500 ml-1">{sortIdx + 1}</span>
                </span>
              )}
            </span>
          </th>
        );
      })}
    </tr>
  </thead>
);

export default OrdersTableHeader;
