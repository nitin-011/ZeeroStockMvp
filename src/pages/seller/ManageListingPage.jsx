import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge'; 
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Plus, Edit, Trash2, Eye, PauseCircle, PlayCircle, MoreHorizontal } from 'lucide-react'; // Icons

const ManageListingsPage = () => {
  const navigate = useNavigate();

  // Dummy data for seller listings
  const listings = [
    {
      id: 'LST-001',
      productName: 'High-Grade Steel Coils',
      category: 'Raw Materials',
      price: '₹55,000 / Ton',
      quantity: '100 Tons',
      status: 'Active',
      views: 1250,
      offers: 5,
      lastUpdated: '2024-07-20',
    },
    {
      id: 'LST-002',
      productName: 'Electronic Microcontrollers',
      category: 'Components',
      price: '₹120 / Unit',
      quantity: '5000 Units',
      status: 'Active',
      views: 890,
      offers: 12,
      lastUpdated: '2024-07-18',
    },
    {
      id: 'LST-003',
      productName: 'Industrial Bearings (SKF)',
      category: 'Machinery Parts',
      price: '₹800 / Piece',
      quantity: '500 Pieces',
      status: 'Paused',
      views: 340,
      offers: 2,
      lastUpdated: '2024-07-15',
    },
    {
      id: 'LST-004',
      productName: 'Plastic Granules (HDPE)',
      category: 'Raw Materials',
      price: '₹95 / Kg',
      quantity: '20 Tons',
      status: 'Draft',
      views: 0,
      offers: 0,
      lastUpdated: '2024-07-10',
    },
    {
      id: 'LST-005',
      productName: 'CNC Machine Spares',
      category: 'Machinery',
      price: '₹15,000 / Lot',
      quantity: '1 Lot',
      status: 'Active',
      views: 560,
      offers: 7,
      lastUpdated: '2024-07-05',
    },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Active':
        return 'default'; // Tailwind default blue or green
      case 'Paused':
        return 'outline'; // Tailwind default gray outline
      case 'Draft':
        return 'secondary'; // Tailwind secondary gray
      default:
        return 'default';
    }
  };

  const handleEdit = (id) => {
    console.log('Editing listing:', id);
    // In a real app, navigate to an edit listing page, pre-filling data
    navigate(`/seller/edit-listing/${id}`);
  };

  const handleToggleStatus = (id, currentStatus) => {
    console.log(`Toggling status for ${id} from ${currentStatus}`);
    // In a real app, dispatch Redux action or API call to update status
    alert(`Listing ${id} status toggled!`); // Replace with Shadcn Toast/Dialog
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete listing ${id}? This action cannot be undone.`)) { // Replace with Shadcn AlertDialog
      console.log('Deleting listing:', id);
      // In a real app, dispatch Redux action or API call to delete listing
      alert(`Listing ${id} deleted.`); // Replace with Shadcn Toast/Dialog
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">Manage Listings</CardTitle>
            <CardDescription className="text-gray-600">
              View, edit, and manage your active, paused, and drafted inventory listings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={() => navigate('/seller/list-new-item')}>
                <Plus className="h-4 w-4 mr-2" /> Add New Listing
              </Button>
            </div>

            {listings.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">You have no listings yet.</p>
                <Button onClick={() => navigate('/seller/list-new-item')}>
                  Create Your First Listing
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Offers</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((listing) => (
                    <TableRow key={listing.id}>
                      <TableCell className="font-medium">{listing.productName}</TableCell>
                      <TableCell>{listing.category}</TableCell>
                      <TableCell>{listing.price}</TableCell>
                      <TableCell>{listing.quantity}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(listing.status)} className="rounded-full px-2 py-1">
                          {listing.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{listing.views}</TableCell>
                      <TableCell>{listing.offers}</TableCell>
                      <TableCell>{listing.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => navigate(`/product/${listing.id}`)}>
                              <Eye className="h-4 w-4 mr-2" /> View Public Listing
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEdit(listing.id)}>
                              <Edit className="h-4 w-4 mr-2" /> Edit
                            </DropdownMenuItem>
                            {listing.status === 'Active' ? (
                              <DropdownMenuItem onClick={() => handleToggleStatus(listing.id, 'Active')}>
                                <PauseCircle className="h-4 w-4 mr-2" /> Pause
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem onClick={() => handleToggleStatus(listing.id, 'Paused')}>
                                <PlayCircle className="h-4 w-4 mr-2" /> Activate
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(listing.id)}>
                              <Trash2 className="h-4 w-4 mr-2" /> Delete
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

export default ManageListingsPage;
