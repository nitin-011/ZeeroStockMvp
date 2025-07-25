import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { User, Building2, Mail, Phone, MapPin, CheckCircle, AlertCircle, List, DollarSign, Package } from 'lucide-react'; // Icons

const AdminUserDetailsPage = () => {
  const { userId } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userRole = searchParams.get('role'); // Get role from query params

  // Dummy user data (replace with actual data fetching later)
  // In a real app, you'd fetch this user's data based on userId from your backend
  const dummyUsers = {
    'USR-001': {
      id: 'USR-001',
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+91 98765 12345',
      role: 'Buyer',
      status: 'Active',
      kycStatus: 'Verified',
      registeredDate: '2024-01-10',
      buyerSpecific: {
        companyName: 'Alpha Solutions',
        businessType: 'IT Services',
        totalOrders: 50,
        totalSpent: '₹1,25,000',
        savedSearches: 10,
        watchlistItems: 15,
      },
    },
    'USR-002': {
      id: 'USR-002',
      name: 'Ravi Kumar',
      email: 'ravi.kumar@example.com',
      phone: '+91 99887 76655',
      role: 'Seller',
      status: 'Active',
      kycStatus: 'Verified',
      registeredDate: '2024-01-15',
      sellerSpecific: {
        companyName: 'Sunrise Manufacturing Pvt Ltd',
        businessType: 'Textile Mill',
        gstin: '27ABCDE1234F1Z5',
        companyAddress: 'Plot No. 45, Industrial Area, Phase 1, Gurgaon, Haryana - 122001',
        activeListings: 143,
        pendingOffers: 27,
        totalSales: '₹5,00,000',
        listingsReviewed: 250,
      },
    },
    'USR-003': {
      id: 'USR-003',
      name: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      phone: '+91 91234 56789',
      role: 'Buyer',
      status: 'Active',
      kycStatus: 'Pending',
      registeredDate: '2024-02-01',
      buyerSpecific: {
        companyName: 'Beta Enterprises',
        businessType: 'Trading',
        totalOrders: 5,
        totalSpent: '₹15,000',
        savedSearches: 2,
        watchlistItems: 3,
      },
    },
  };

  const user = dummyUsers[userId];

  // If user not found
  if (!user) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">User Not Found</h1>
        <p className="text-gray-600">The user you are looking for does not exist.</p>
        <Button onClick={() => navigate('/admin/user-management')} className="mt-6">Back to User Management</Button>
      </div>
    );
  }

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Active': return 'green';
      case 'Suspended': return 'red';
      case 'Verified': return 'default';
      case 'Pending': return 'yellow';
      case 'Rejected': return 'red';
      case 'More Info Needed': return 'orange';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumbs or Back button */}
        <Button variant="link" onClick={() => navigate('/admin/user-management')} className="text-blue-600 hover:underline px-0">
          &larr; Back to User Management
        </Button>

        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <User className="h-6 w-6 mr-2" /> User Details: {user.name}
            </CardTitle>
            <CardDescription className="text-gray-600">
              Comprehensive overview of {user.name}'s account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* General User Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">General Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>User ID</Label>
                  <Input value={user.id} disabled className="rounded-md bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={user.name} disabled className="rounded-md bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input value={user.email} disabled className="rounded-md bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={user.phone} disabled className="rounded-md bg-gray-50" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Badge variant="secondary" className="rounded-full px-3 py-1 text-base mt-2">
                    {user.role}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Label>Account Status</Label>
                  <Badge variant={getStatusBadgeVariant(user.status)} className="rounded-full px-3 py-1 text-base mt-2">
                    {user.status}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label>KYC/KYB Status</Label>
                <Badge variant={getStatusBadgeVariant(user.kycStatus)} className="rounded-full px-3 py-1 text-base mt-2">
                  {user.kycStatus}
                </Badge>
                {user.kycStatus !== 'Verified' && (
                  <Button variant="link" size="sm" onClick={() => navigate('/admin/verifications')} className="ml-2">
                    Review Documents
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                <Label>Registered Date</Label>
                <Input value={user.registeredDate} disabled className="rounded-md bg-gray-50" />
              </div>
            </div>

            {/* Role-Specific Information */}
            {user.role === 'Buyer' && user.buyerSpecific && (
              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><Building2 className="h-5 w-5 mr-2" /> Buyer Specific Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input value={user.buyerSpecific.companyName} disabled className="rounded-md bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Business Type</Label>
                    <Input value={user.buyerSpecific.businessType} disabled className="rounded-md bg-gray-50" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Total Orders</Label>
                    <Input value={user.buyerSpecific.totalOrders} disabled className="rounded-md bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Total Spent</Label>
                    <Input value={user.buyerSpecific.totalSpent} disabled className="rounded-md bg-gray-50" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Saved Searches</Label>
                    <Input value={user.buyerSpecific.savedSearches} disabled className="rounded-md bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Watchlist Items</Label>
                    <Input value={user.buyerSpecific.watchlistItems} disabled className="rounded-md bg-gray-50" />
                  </div>
                </div>
              </div>
            )}

            {user.role === 'Seller' && user.sellerSpecific && (
              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><Building2 className="h-5 w-5 mr-2" /> Seller Specific Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input value={user.sellerSpecific.companyName} disabled className="rounded-md bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Business Type</Label>
                    <Input value={user.sellerSpecific.businessType} disabled className="rounded-md bg-gray-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>GSTIN</Label>
                  <Input value={user.sellerSpecific.gstin} disabled className="rounded-md bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label>Company Address</Label>
                  <Input value={user.sellerSpecific.companyAddress} disabled className="rounded-md bg-gray-50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Active Listings</Label>
                    <Input value={user.sellerSpecific.activeListings} disabled className="rounded-md bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Pending Offers</Label>
                    <Input value={user.sellerSpecific.pendingOffers} disabled className="rounded-md bg-gray-50" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Total Sales</Label>
                    <Input value={user.sellerSpecific.totalSales} disabled className="rounded-md bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Listings Reviewed</Label>
                    <Input value={user.sellerSpecific.listingsReviewed} disabled className="rounded-md bg-gray-50" />
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-8">
              <Button variant="outline" onClick={() => navigate(`/admin/edit-user/${user.id}`)}>
                <Edit className="h-4 w-4 mr-2" /> Edit User
              </Button>
              {user.status === 'Active' ? (
                <Button variant="destructive" onClick={() => console.log('Suspend User', user.id)}>
                  <Ban className="h-4 w-4 mr-2" /> Suspend User
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => console.log('Activate User', user.id)}>
                  <CheckCircle className="h-4 w-4 mr-2" /> Activate User
                </Button>
              )}
              <Button variant="ghost" className="text-red-600 hover:text-red-800" onClick={() => console.log('Delete User', user.id)}>
                <Trash2 className="h-4 w-4 mr-2" /> Delete User
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminUserDetailsPage;
