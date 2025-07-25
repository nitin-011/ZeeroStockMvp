import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Package, Truck, CheckCircle, XCircle, Info, MessageSquare } from 'lucide-react'; // Icons

const SellerOrdersPage = () => {
  const navigate = useNavigate();

  // Dummy data for seller orders
  const orders = [
    {
      id: 'SO-001',
      orderDate: '2024-07-20',
      productName: 'High-Grade Steel Coils',
      buyer: 'Bharat Steels',
      quantity: '100 Tons',
      amount: '₹55,000',
      status: 'Processing',
      trackingId: 'SHP123456789',
    },
    {
      id: 'SO-002',
      orderDate: '2024-07-19',
      productName: 'CNC Machine Spares',
      buyer: 'Advanced Mfg. Co.',
      quantity: '1 Lot',
      amount: '₹14,000',
      status: 'Shipped',
      trackingId: 'SHP987654321',
    },
    {
      id: 'SO-003',
      orderDate: '2024-07-15',
      productName: 'Electronic Microcontrollers',
      buyer: 'Digital Systems',
      quantity: '5000 Units',
      amount: '₹110 / Unit', // Note: Amount here might be per unit, total calculated on detail page
      status: 'Completed',
      trackingId: 'SHP112233445',
    },
    {
      id: 'SO-004',
      orderDate: '2024-07-10',
      productName: 'Industrial Bearings (SKF)',
      buyer: 'Precision Mech',
      quantity: '500 Pieces',
      amount: '₹850 / Piece', // Note: Amount here might be per unit, total calculated on detail page
      status: 'Cancelled',
      trackingId: null,
    },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Processing':
        return 'blue';
      case 'Shipped':
        return 'purple';
      case 'Completed':
        return 'green';
      case 'Cancelled':
        return 'red';
      default:
        return 'default';
    }
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
    // In a real app, dispatch Redux action or API call to update order status
    alert(`Order ${orderId} status updated to ${newStatus}!`); // Replace with Shadcn Toast/Dialog
    // Update local state to reflect change (for demo purposes)
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    // In a real app, you'd likely refetch data or dispatch an action to update global state
    // For this static demo, we'll just log.
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Package className="h-6 w-6 mr-2" /> My Orders (Sales)
            </CardTitle>
            <CardDescription className="text-gray-600">
              Track and manage your sales orders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">You have no sales orders yet.</p>
                <Button onClick={() => navigate('/seller/list-new-item')}>
                  List Your First Item
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.orderDate}</TableCell>
                      <TableCell>{order.productName}</TableCell>
                      <TableCell>{order.buyer}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)} className="rounded-full px-2 py-1">
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => navigate(`/seller/order-details/${order.id}`)}>
                          View Details
                        </Button>
                        {order.status === 'Processing' && (
                          <Button variant="ghost" size="sm" className="ml-2 text-purple-600 hover:text-purple-800" onClick={() => handleUpdateStatus(order.id, 'Shipped')}>
                            <Truck className="h-4 w-4 mr-1" /> Mark Shipped
                          </Button>
                        )}
                        {order.status === 'Shipped' && (
                          <Button variant="ghost" size="sm" className="ml-2 text-green-600 hover:text-green-800" onClick={() => handleUpdateStatus(order.id, 'Completed')}>
                            <CheckCircle className="h-4 w-4 mr-1" /> Mark Completed
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="ml-2" onClick={() => console.log('Message Buyer', order.buyer)}>
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerOrdersPage;
