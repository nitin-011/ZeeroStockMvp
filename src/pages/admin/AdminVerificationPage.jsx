import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, CheckCircle, XCircle, FileText, Clock, Info } from 'lucide-react'; // Icons

const AdminVerificationsPage = () => {
  const navigate = useNavigate();

  // Dummy data for verification requests
  const [verifications, setVerifications] = useState([
    {
      id: 'VER-001',
      userId: 'USR-003',
      userName: 'Priya Sharma',
      userRole: 'Buyer',
      documentType: 'GST Certificate',
      status: 'Pending',
      submissionDate: '2024-07-23',
    },
    {
      id: 'VER-002',
      userId: 'USR-008',
      userName: 'Amit Patel',
      userRole: 'Seller',
      documentType: 'Company Registration',
      status: 'Pending',
      submissionDate: '2024-07-22',
    },
    {
      id: 'VER-003',
      userId: 'USR-005',
      userName: 'Rahul Verma',
      userRole: 'Buyer',
      documentType: 'PAN Card',
      status: 'Rejected',
      submissionDate: '2024-07-20',
    },
    {
      id: 'VER-004',
      userId: 'USR-002',
      userName: 'Ravi Kumar',
      userRole: 'Seller',
      documentType: 'Bank Details',
      status: 'Approved',
      submissionDate: '2024-07-18',
    },
    {
      id: 'VER-005',
      userId: 'USR-009',
      userName: 'Sneha Gupta',
      userRole: 'Seller',
      documentType: 'Authorized Signatory Proof',
      status: 'More Info Needed',
      submissionDate: '2024-07-19',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredVerifications = verifications.filter(verification => {
    const matchesSearch = verification.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          verification.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          verification.documentType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || verification.userRole.toLowerCase() === filterRole;
    const matchesStatus = filterStatus === 'all' || verification.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Pending': return 'yellow';
      case 'Approved': return 'green';
      case 'Rejected': return 'red';
      case 'More Info Needed': return 'orange'; // Custom color for this status
      default: return 'secondary';
    }
  };

  const handleViewDocument = (verificationId) => {
    console.log('Viewing document for verification:', verificationId);
    // In a real app, open a modal or new tab to view the uploaded document
    alert(`Simulating document view for ${verificationId}.`); // Replace with actual document viewer
  };

  const handleApprove = (verificationId) => {
    console.log('Approving verification:', verificationId);
    setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'Approved' } : v));
    alert(`Verification ${verificationId} approved!`);
  };

  const handleReject = (verificationId) => {
    console.log('Rejecting verification:', verificationId);
    setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'Rejected' } : v));
    alert(`Verification ${verificationId} rejected!`);
  };

  const handleRequestMoreInfo = (verificationId) => {
    console.log('Requesting more info for verification:', verificationId);
    setVerifications(prev => prev.map(v => v.id === verificationId ? { ...v, status: 'More Info Needed' } : v));
    alert(`Requested more info for verification ${verificationId}.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <FileText className="h-6 w-6 mr-2" /> Verification Queue
            </CardTitle>
            <CardDescription className="text-gray-600">
              Review and manage KYC/KYB verification requests from users.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search by user name, ID, or document type..."
                  className="w-full pl-9 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterRole} onValueChange={setFilterRole}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by User Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="more info needed">More Info Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredVerifications.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">No verification requests found matching your criteria.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVerifications.map((verification) => (
                    <TableRow key={verification.id}>
                      <TableCell className="font-medium">{verification.id}</TableCell>
                      <TableCell>{verification.userName} ({verification.userId})</TableCell>
                      <TableCell>{verification.userRole}</TableCell>
                      <TableCell>{verification.documentType}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(verification.status)} className="rounded-full px-2 py-1">
                          {verification.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{verification.submissionDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="mr-2" onClick={() => handleViewDocument(verification.id)}>
                          <Eye className="h-4 w-4 mr-1" /> View Doc
                        </Button>
                        {verification.status === 'Pending' || verification.status === 'More Info Needed' ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open actions menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleApprove(verification.id)}>
                                <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleReject(verification.id)}>
                                <XCircle className="h-4 w-4 mr-2 text-red-600" /> Reject
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleRequestMoreInfo(verification.id)}>
                                <Info className="h-4 w-4 mr-2 text-orange-600" /> Request More Info
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <span className="text-gray-500 text-sm">No actions</span>
                        )}
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

export default AdminVerificationsPage;
