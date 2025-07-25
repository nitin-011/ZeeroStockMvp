import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2, CheckCircle, XCircle, Clock } from 'lucide-react'; // Icons

const AdminListingsPage = () => {
  const navigate = useNavigate();

  // Dummy data for listings
  const [listings, setListings] = useState([
    {
      id: 'LST-001',
      productName: 'High-Grade Steel Coils',
      seller: 'MetalFab India',
      category: 'Raw Materials',
      status: 'Active',
      reviewStatus: 'Approved',
      postedDate: '2024-07-20',
    },
    {
      id: 'LST-002',
      productName: 'Electronic Microcontrollers',
      seller: 'ElectroCorp Pvt Ltd',
      category: 'Components',
      status: 'Active',
      reviewStatus: 'Approved',
      postedDate: '2024-07-18',
    },
    {
      id: 'LST-003',
      productName: 'Industrial Bearings (SKF)',
      seller: 'Precision Parts Co.',
      category: 'Machinery Parts',
      status: 'Paused',
      reviewStatus: 'Approved',
      postedDate: '2024-07-15',
    },
    {
      id: 'LST-004',
      productName: 'Plastic Granules (HDPE)',
      seller: 'PolyChem Solutions',
      category: 'Raw Materials',
      status: 'Draft',
      reviewStatus: 'Pending',
      postedDate: '2024-07-10',
    },
    {
      id: 'LST-005',
      productName: 'CNC Machine Spares',
      seller: 'MechTools India',
      category: 'Machinery',
      status: 'Active',
      reviewStatus: 'Approved',
      postedDate: '2024-07-05',
    },
    {
      id: 'LST-006',
      productName: 'Defective LED Displays',
      seller: 'BrightTech Solutions',
      category: 'Electronics',
      status: 'Active',
      reviewStatus: 'Rejected', // Example of a rejected listing
      postedDate: '2024-07-01',
    },
    {
      id: 'LST-007',
      productName: 'Excess Copper Wire',
      seller: 'Conductive Materials',
      category: 'Raw Materials',
      status: 'Pending Review', // Custom status for admin review flow
      reviewStatus: 'Pending',
      postedDate: '2024-07-23',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all'); // Listing status (Active, Paused, Draft)
  const [filterReviewStatus, setFilterReviewStatus] = useState('all'); // Admin review status (Approved, Pending, Rejected)

  const categories = ['Raw Materials', 'Components', 'Machinery Parts', 'Electronics', 'Packaging', 'Chemicals'];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || listing.category.toLowerCase().replace(/\s/g, '-') === filterCategory;
    const matchesStatus = filterStatus === 'all' || listing.status.toLowerCase() === filterStatus;
    const matchesReviewStatus = filterReviewStatus === 'all' || listing.reviewStatus.toLowerCase() === filterReviewStatus;
    return matchesSearch && matchesCategory && matchesStatus && matchesReviewStatus;
  });

  const getListingStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Active': return 'default'; // Tailwind default blue or green
      case 'Paused': return 'outline'; // Tailwind default gray outline
      case 'Draft': return 'secondary'; // Tailwind secondary gray
      case 'Pending Review': return 'yellow';
      default: return 'secondary';
    }
  };

  const getReviewStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Approved': return 'green';
      case 'Pending': return 'yellow';
      case 'Rejected': return 'red';
      default: return 'secondary';
    }
  };

  const handleViewListing = (listingId) => {
    console.log('Viewing public listing:', listingId);
    navigate(`/product/${listingId}`); // Navigate to the public product detail page
  };

  const handleEditListing = (listingId) => {
    console.log('Editing listing:', listingId);
    navigate(`/admin/edit-listing/${listingId}`); // Navigate to an admin edit listing page
  };

  const handleApproveListing = (listingId) => {
    console.log('Approving listing:', listingId);
    // In a real app, dispatch API call to update review status
    setListings(prev => prev.map(l => l.id === listingId ? { ...l, reviewStatus: 'Approved', status: 'Active' } : l));
    alert(`Listing ${listingId} approved and set to Active!`);
  };

  const handleRejectListing = (listingId) => {
    console.log('Rejecting listing:', listingId);
    // In a real app, dispatch API call to update review status
    setListings(prev => prev.map(l => l.id === listingId ? { ...l, reviewStatus: 'Rejected', status: 'Paused' } : l));
    alert(`Listing ${listingId} rejected and set to Paused!`);
  };

  const handleDeleteListing = (listingId) => {
    if (window.confirm(`Are you sure you want to delete listing ${listingId}? This action cannot be undone.`)) {
      console.log('Deleting listing:', listingId);
      // In a real app, dispatch API call to delete listing
      setListings(prev => prev.filter(l => l.id !== listingId));
      alert(`Listing ${listingId} deleted.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <List className="h-6 w-6 mr-2" /> All Listings
            </CardTitle>
            <CardDescription className="text-gray-600">
              Manage and moderate all product listings on the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search by product, seller, or ID..."
                  className="w-full pl-9 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by Listing Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending review">Pending Review</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterReviewStatus} onValueChange={setFilterReviewStatus}>
                <SelectTrigger className="w-[180px] rounded-md">
                  <SelectValue placeholder="Filter by Review Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Review Statuses</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredListings.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">No listings found matching your criteria.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Listing ID</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Seller</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Listing Status</TableHead>
                    <TableHead>Review Status</TableHead>
                    <TableHead>Posted Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredListings.map((listing) => (
                    <TableRow key={listing.id}>
                      <TableCell className="font-medium">{listing.id}</TableCell>
                      <TableCell>{listing.productName}</TableCell>
                      <TableCell>{listing.seller}</TableCell>
                      <TableCell>{listing.category}</TableCell>
                      <TableCell>
                        <Badge variant={getListingStatusBadgeVariant(listing.status)} className="rounded-full px-2 py-1">
                          {listing.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getReviewStatusBadgeVariant(listing.reviewStatus)} className="rounded-full px-2 py-1">
                          {listing.reviewStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>{listing.postedDate}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleViewListing(listing.id)}>
                              <Eye className="h-4 w-4 mr-2" /> View Public Listing
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditListing(listing.id)}>
                              <Edit className="h-4 w-4 mr-2" /> Edit Listing
                            </DropdownMenuItem>
                            {listing.reviewStatus === 'Pending' && (
                              <>
                                <DropdownMenuItem onClick={() => handleApproveListing(listing.id)}>
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleRejectListing(listing.id)}>
                                  <XCircle className="h-4 w-4 mr-2 text-red-600" /> Reject
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteListing(listing.id)}>
                              <Trash2 className="h-4 w-4 mr-2" /> Delete Listing
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

export default AdminListingsPage;
