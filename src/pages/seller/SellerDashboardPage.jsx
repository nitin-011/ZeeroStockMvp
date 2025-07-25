import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Button } from '../../components/ui/button';
import { ChevronDown, List, DollarSign, Clock, Percent, Plus, Edit, Trash2, ExternalLink } from 'lucide-react'; // Icons from lucide-react

const SellerDashboardPage = () => {
  const navigate = useNavigate();

  // Dummy data for dashboard cards
  const dashboardStats = [
    {
      title: 'Total Revenue',
      value: '₹24,567',
      change: '+12.5%',
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      color: 'text-green-500',
    },
    {
      title: 'Active Listings',
      value: '143',
      change: '+8 new',
      icon: <List className="h-5 w-5 text-blue-500" />,
      color: 'text-blue-500',
    },
    {
      title: 'Pending Offers',
      value: '27',
      change: 'Awaiting response',
      icon: <Clock className="h-5 w-5 text-yellow-500" />,
      color: 'text-yellow-500',
    },
    {
      title: 'Conversion Rate',
      value: '68%',
      change: '+3.2%',
      icon: <Percent className="h-5 w-5 text-purple-500" />,
      color: 'text-purple-500',
    },
  ];

  // Dummy data for Active Listings table
  const activeListings = [
    { id: 'SKU-MBP16-001', product: 'MacBook Pro 16"', category: 'Electronics', price: '₹2,399', stock: '12', status: 'Active' },
    { id: 'SKU-IP15-001', product: 'iPhone 15 Pro', category: 'Electronics', price: '₹999', stock: '3', status: 'Low Stock' },
    { id: 'SKU-IND-005', product: 'Industrial Sensor', category: 'Sensors', price: '₹150', stock: '25', status: 'Active' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <div className="flex items-center mb-6">
          <span className="text-blue-600 font-bold text-xl">ZeeroStock</span>
          <span className="ml-2 text-gray-700 text-sm">Seller Dashboard</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <a href="/seller-dashboard" className="flex items-center p-2 rounded-md bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors duration-200">
                <List className="h-5 w-5 mr-3" /> Dashboard
              </a>
            </li>
            <li>
              <a href="/seller/list-new-item" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <Plus className="h-5 w-5 mr-3" /> List New Item
              </a>
            </li>
            <li>
              <a href="/seller/manage-listings" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <Edit className="h-5 w-5 mr-3" /> Manage Listings
              </a>
            </li>
            <li>
              <a href="/seller/my-orders" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <List className="h-5 w-5 mr-3" /> My Orders
              </a>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="/seller/kyc-status" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  KYC/KYB Status
                </a>
              </li>
              <li>
                <a href="/seller/settings" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
            <p className="text-gray-600">Welcome back, manage your inventory and track performance</p>
          </div>
          {/* User Profile/Notifications (from Navbar, but often repeated here for context) */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for Notification Bell */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" /></svg>
            </Button>
            {/* Placeholder for User Avatar */}
            <div className="flex items-center space-x-2">
              <img src="https://placehold.co/40x40/AEC6CF/FFFFFF?text=JS" alt="John Seller" className="h-10 w-10 rounded-full" />
              <span className="font-medium text-gray-800 hidden sm:block">John Seller</span>
            </div>
          </div>
        </div>

        {/* KYC/KYB Verification Status */}
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md flex justify-between items-center">
          <span>
            <span className="font-semibold">KYC/KYB Verified</span>: Your account is fully verified and ready for trading
          </span>
          <ExternalLink className="h-5 w-5 cursor-pointer" onClick={() => navigate('/seller/kyc-status')} />
        </div>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="rounded-lg shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs ${stat.color}`}>{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Performance and Category Performance Charts (Placeholders) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Sales Performance</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    Last 30 days <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                  <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                  <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                  <DropdownMenuItem>This Year</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
              [Sales Performance Chart Placeholder]
            </div>
          </Card>
          <Card className="rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Category Performance</CardTitle>
              <Button variant="link" className="text-blue-600 hover:underline" onClick={() => console.log('View all categories')}>
                View all
              </Button>
            </div>
            <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
              [Category Performance Chart Placeholder]
            </div>
          </Card>
        </div>

        {/* Active Listings Table */}
        <Card className="rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Active Listings</CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/seller/list-new-item')}>
              <Plus className="h-4 w-4 mr-2" /> Add New
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeListings.map((listing) => (
                <TableRow key={listing.id}>
                  <TableCell className="font-medium">{listing.product}</TableCell>
                  <TableCell>{listing.category}</TableCell>
                  <TableCell>{listing.price}</TableCell>
                  <TableCell>{listing.stock}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      listing.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {listing.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="mr-2" onClick={() => console.log('Edit', listing.id)}>
                      <Edit className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => console.log('Delete', listing.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default SellerDashboardPage;
