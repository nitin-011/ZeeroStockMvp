import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, DollarSign, MessageSquare, AlertCircle } from 'lucide-react'; // Icons

const AdminTransactionsPage = () => {
  const navigate = useNavigate();

  // Dummy data for transactions
  const [transactions, setTransactions] = useState([
    {
      id: 'TXN-001',
      orderId: 'ORD-2024-001',
      buyer: 'John Smith',
      seller: 'MetalFab India',
      amount: '₹55,000',
      status: 'Completed',
      type: 'Sale',
      date: '2024-07-20',
    },
    {
      id: 'TXN-002',
      orderId: 'ORD-2024-002',
      buyer: 'Priya Sharma',
      seller: 'ElectroCorp Pvt Ltd',
      amount: '₹12,000',
      status: 'Processing',
      type: 'Sale',
      date: '2024-07-18',
    },
    {
      id: 'TXN-003',
      orderId: 'ORD-2024-003',
      buyer: 'Rahul Verma',
      seller: 'Precision Parts Co.',
      amount: '₹4,000',
      status: 'Disputed',
      type: 'Sale',
      date: '2024-07-15',
    },
    {
      id: 'TXN-004',
      orderId: 'ORD-2024-004',
      buyer: 'Amit Patel',
      seller: 'PolyChem Solutions',
      amount: '₹9,500',
      status: 'Refunded',
      type: 'Sale',
      date: '2024-07-10',
    },
    {
      id: 'TXN-005',
      orderId: 'ORD-2024-005',
      buyer: 'Sneha Gupta',
      seller: 'MechTools India',
      amount: '₹15,000',
      status: 'Completed',
      type: 'Sale',
      date: '2024-07-05',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type.toLowerCase() === filterType;
    const matchesStatus = filterStatus === 'all' || transaction.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Completed': return 'green';
      case 'Processing': return 'blue';
      case 'Disputed': return 'red';
      case 'Refunded': return 'orange';
      default: return 'secondary';
    }
  };

  const handleViewTransactionDetails = (transactionId) => {
    console.log('Viewing transaction details for:', transactionId);
    navigate(`/admin/transaction-details/${transactionId}`); // Navigate to a detailed transaction page
  };

  const handleResolveDispute = (transactionId) => {
    console.log('Resolving dispute for transaction:', transactionId);
    // In a real app, open a dispute resolution interface
    alert(`Initiating dispute resolution for transaction ${transactionId}.`);
  };

  const handleProcessRefund = (transactionId) => {
    console.log('Processing refund for transaction:', transactionId);
    // In a real app, trigger refund process
    alert(`Processing refund for transaction ${transactionId}.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <DollarSign className="h-6 w-6 mr-2" /> Transaction Management
            </CardTitle>
            <CardDescription className="text-gray-600">
              Monitor all financial transactions and manage payment statuses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search by user, order ID, or transaction ID..."
                  className="w-full pl-9 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sale">Sale</SelectItem>
                  <SelectItem value="refund">Refund</SelectItem>
                  {/* Add other transaction types if applicable */}
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="disputed">Disputed</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredTransactions.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">No transactions found matching your criteria.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Seller</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>
                        <a href={`/admin/order-details/${transaction.orderId}`} className="text-blue-600 hover:underline">
                          {transaction.orderId}
                        </a>
                      </TableCell>
                      <TableCell>{transaction.buyer}</TableCell>
                      <TableCell>{transaction.seller}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(transaction.status)} className="rounded-full px-2 py-1">
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open actions menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleViewTransactionDetails(transaction.id)}>
                              <Eye className="h-4 w-4 mr-2" /> View Details
                            </DropdownMenuItem>
                            {transaction.status === 'Disputed' && (
                              <DropdownMenuItem onClick={() => handleResolveDispute(transaction.id)}>
                                <AlertCircle className="h-4 w-4 mr-2 text-orange-600" /> Resolve Dispute
                              </DropdownMenuItem>
                            )}
                            {transaction.status === 'Completed' && (
                              <DropdownMenuItem onClick={() => handleProcessRefund(transaction.id)}>
                                <DollarSign className="h-4 w-4 mr-2 text-red-600" /> Process Refund
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => console.log('Message', transaction.buyer, transaction.seller)}>
                              <MessageSquare className="h-4 w-4 mr-2" /> Message Parties
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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

export default AdminTransactionsPage;
