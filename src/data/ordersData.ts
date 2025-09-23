// Example: 50 mock order data objects for the OrdersTable
// You can import this file in App.tsx or OrdersTable.tsx

// Utility to generate random order data
const customers = [
  'Alice Smith', 'Bob Johnson', 'Carol Lee', 'David Kim', 'Eva Brown', 'Frank White', 'Grace Green', 'Henry Black', 'Ivy Young', 'Jack King',
  'Liam Turner', 'Mia Clark', 'Noah Scott', 'Olivia Adams', 'Paul Walker', 'Quinn Hall', 'Ruby Evans', 'Sam Carter', 'Tina Lewis', 'Uma Patel',
  'Victor Reed', 'Wendy Fox', 'Xander Gray', 'Yara Hunt', 'Zane Price'
];
const items = [
  'Wireless Mouse', 'Bluetooth Keyboard', 'USB-C Hub', 'Laptop Stand', 'Monitor Arm', 'Webcam', 'Desk Lamp', 'Ergonomic Chair', 'Desk Organizer', 'Mouse Pad',
  'Notebook', 'Pen Set', 'Smartphone', 'Tablet', 'Charger', 'Headphones', 'Speaker', 'Camera', 'Printer', 'Scanner'
];
const statuses = ['Completed', 'Pending', 'Cancelled'];

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().slice(0, 10);
}

export const ordersData = Array.from({ length: 50 }, (_, i) => ({
  orderId: `ORD-${1001 + i}`,
  customer: customers[Math.floor(Math.random() * customers.length)],
  orderItem: items[Math.floor(Math.random() * items.length)],
  deliveryDate: randomDate(new Date('2025-09-01'), new Date('2025-09-30')),
  deliveryPricing: Number((Math.random() * 20 + 1).toFixed(2)),
  status:
    statuses[Math.floor(Math.random() * statuses.length)] === 'Completed' ? 'Completed'
    : statuses[Math.floor(Math.random() * statuses.length)] === 'Pending' ? 'Continuing'
    : statuses[Math.floor(Math.random() * statuses.length)] === 'Cancelled' ? 'Canceled'
    : 'Restitute',
}));
