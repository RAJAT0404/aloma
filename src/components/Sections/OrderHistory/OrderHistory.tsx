'use client'
import React, { useCallback, useMemo } from 'react';
import Sidebar from '@/components/Common/Sidebar';
import { Button } from '@/components/ui/button';
import { Truck, RefreshCw, FileText, Trash2 } from 'lucide-react';
import Image from 'next/image';
import front from '../../../../public/my-designs/front.jpg';
import frontRed from  '../../../../public/my-designs/front-red.jpg';


interface Order {
  id: string;
  date: string;
  thumbnail: string;
  productName: string;
  quantity: number;
  total: string;
  deliveryMethod: string;
  status: 'Delivered' | 'Shipped' | string;
  estimatedDelivery: string;
  deliveredDate: string | null;
}

const DEFAULT_ORDERS: Order[] = [
  {
    id: 'ORD-2023-0015',
    date: 'October 15, 2023',
    thumbnail: front.src,
    productName: 'Custom Hoodie - westside',
    quantity: 1,
    total: '$129.99',
    deliveryMethod: 'Standard',
    status: 'Delivered',
    estimatedDelivery: 'October 20, 2023',
    deliveredDate: 'October 18, 2023'
  },
  {
    id: 'ORD-2023-0014',
    date: 'September 28, 2023',
    thumbnail: frontRed.src,
    productName: 'Premium T-Shirt - Infotech',
    quantity: 2,
    total: '$89.99',
    deliveryMethod: 'Rush',
    status: 'Shipped',
    estimatedDelivery: 'October 5, 2023',
    deliveredDate: null
  }
];

const OrderHistory = () => {
  const [orders, setOrders] = React.useState<Order[]>(DEFAULT_ORDERS);

  const handleRemoveOrder = useCallback((orderId: string) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  }, []);

  const getStatusColor = useMemo(() => (status: string) => {
    switch(status) {
      case 'Delivered': return 'text-green-600';
      case 'Shipped': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  }, []);

  const hasOrders = orders.length > 0;

  return (
    <section className="container flex mx-auto">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>

          {hasOrders ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <OrderCard 
                  key={order.id}
                  order={order}
                  onRemove={handleRemoveOrder}
                  getStatusColor={getStatusColor}
                />
              ))}
            </div>
          ) : (
            <EmptyOrderState />
          )}
        </div>
      </div>
    </section>
  );
};

const OrderCard = ({ 
  order,
  onRemove,
  getStatusColor
}: {
  order: Order;
  onRemove: (id: string) => void;
  getStatusColor: (status: string) => string;
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-24 h-24 rounded-md overflow-hidden border relative">
        <Image
          src={order?.thumbnail}
          alt={order?.productName}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">{order.productName}</h3>
            <p className="text-sm text-gray-500 mt-1">Order #{order.id} • {order.date}</p>
          </div>
          <p className="font-medium text-blue-600">{order.total}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <OrderDetail label="Quantity" value={order.quantity.toString()} />
          <OrderDetail label="Delivery Method" value={order.deliveryMethod} />
          <OrderDetail 
            label="Status" 
            value={order.status} 
            className={getStatusColor(order.status)} 
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <OrderButton icon={Truck} text="Track Order" />
          <OrderButton icon={RefreshCw} text="Reorder" />
          <OrderButton icon={FileText} text="View Details" />
          <Button 
            variant="outline" 
            className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={() => onRemove(order.id)}
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const OrderDetail = ({ 
  label, 
  value, 
  className = '' 
}: { 
  label: string; 
  value: string; 
  className?: string;
}) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className={`font-medium ${className}`}>{value}</p>
  </div>
);

const OrderButton = ({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string }>; text: string }) => (
  <Button variant="outline" className="gap-2">
    <Icon className="w-4 h-4" />
    {text}
  </Button>
);

const EmptyOrderState = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center">
    <div className="mb-6">
      <Image
        src="/Cart/cart2.png" 
        alt="No orders" 
        width={100} 
        height={100} 
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-medium text-gray-800 mb-2">No Orders Yet</h3>
      <p className="text-gray-600">You haven&apos;t placed any orders yet. Start designing your custom apparel!</p>
    </div>
    <Button variant="blue" className="text-white px-8 py-3 rounded-lg font-medium text-base">
      Start Designing
    </Button>
  </div>
);

export default OrderHistory;