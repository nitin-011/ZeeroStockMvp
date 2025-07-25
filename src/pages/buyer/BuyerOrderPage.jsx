import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Package, Truck, CheckCircle, XCircle, Info } from 'lucide-react'; // Icons for order status

const BuyerOrdersPage = () => {
  const navigate = useNavigate();

  // Dummy data for buyer orders
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-07-20',
      item: 'Electronic Components (Batch A)',
      quantity: '5,000 units',
      amount: '₹2,450',
      status: 'Completed',
      seller: 'ElectroCorp Pvt Ltd',
      trackingId: 'TRK123456789',
    },
    {
      id: 'ORD-2024-002',
      date: '2024-07-18',
      item: 'Industrial Bearings (SKF)',
      quantity: '500 pieces',
      amount: '₹1,890',
      status: 'Processing',
      seller: 'Precision Parts Co.',
      trackingId: 'TRK987654321',
    },
    {
      id: 'ORD-2024-003',
      date: '2024-07-15',
      item: 'High-Grade Steel Coils',
      quantity: '10 tons',
      amount: '₹55,000',
      status: 'Shipped',
      seller: 'MetalFab India',
      trackingId: 'TRK112233445',
    },
    {
      id: 'ORD-2024-004',
      date: '2024-07-10',
      item: 'Plastic Granules (HDPE)',
      quantity: '5 tons',
      amount: '₹9,500',
      status: 'Cancelled',
      seller: 'PolyChem Solutions',
      trackingId: null,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-500 mr-1" />;
      case 'Processing':
        return <Package className="h-4 w-4 text-blue-500 mr-1" />;
      case 'Shipped':
        return <Truck className="h-4 w-4 text-purple-500 mr-1" />;
      case 'Cancelled':
        return <XCircle className="h-4 w-4 text-red-500 mr-1" />;
      default:
        return <Info className="h-4 w-4 text-gray-500 mr-1" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">My Orders</CardTitle>
            <CardDescription className="text-gray-600">View your complete order history and status.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.item}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <span className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {getStatusIcon(order.status)} {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.seller}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/buyer/order-details/${order.id}`)}>
                        View Details
                      </Button>
                      {order.trackingId && order.status !== 'Completed' && order.status !== 'Cancelled' && (
                        <Button variant="ghost" size="sm" className="ml-2" onClick={() => console.log('Track Order', order.trackingId)}>
                          Track
                        </Button>
                      )}
                      {order.status === 'Processing' && (
                        <Button variant="ghost" size="sm" className="ml-2 text-red-500 hover:text-red-700" onClick={() => console.log('Cancel Order', order.id)}>
                          Cancel
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {orders.length === 0 && (
              <p className="text-center text-gray-500 py-8">No orders found.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerOrdersPage;
