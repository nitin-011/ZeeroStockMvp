import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { ExternalLink, ShoppingCart, DollarSign, Eye, Search, List, Settings, LifeBuoy, CheckCircle } from 'lucide-react'; // Icons from lucide-react

const BuyerDashboardPage = () => {
  const navigate = useNavigate();

  // Dummy data for dashboard cards
  const dashboardStats = [
    {
      title: 'Total Orders',
      value: '24',
      icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
      change: '+5 since last month',
    },
    {
      title: 'Total Spent',
      value: '₹45,230',
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      change: '+10% since last month',
    },
    {
      title: 'Watchlist Items',
      value: '12',
      icon: <Eye className="h-5 w-5 text-purple-500" />,
      change: '+2 new',
    },
    {
      title: 'Saved Searches',
      value: '8',
      icon: <Search className="h-5 w-5 text-yellow-500" />,
      change: 'Updated recently',
    },
  ];

  // Dummy data for Recent Activity
  const recentActivity = [
    { id: 1, text: 'Order #ORD-2024-001 completed', time: '2 hours ago' },
    { id: 2, text: 'Added new item to watchlist', time: '3 hours ago' },
    { id: 3, text: 'Created new saved search', time: '1 day ago' },
  ];

  // Dummy data for Recent Orders
  const recentOrders = [
    { id: 'ORD-2024-001', item: 'Electronic Components', amount: '₹2,450', status: 'Completed' },
    { id: 'ORD-2024-002', item: 'Industrial Parts', amount: '₹1,890', status: 'Processing' },
  ];

  // Dummy data for Saved Searches
  const savedSearches = [
    { id: 1, query: 'Electronic Components', description: 'Capacitors, Resistors' },
    { id: 2, query: 'Industrial Motors', description: 'AC Motors, DC Motors' },
  ];

  // Dummy data for Watchlist
  const watchlistItems = [
    { id: 1, name: 'SMD Capacitors 1000pF', price: '₹0.05 each' },
    { id: 2, name: 'Industrial Servo Motor', price: '₹245.00 each' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <div className="flex items-center mb-6">
          <span className="text-blue-600 font-bold text-xl">ZeeroStock</span>
          <span className="ml-2 text-gray-700 text-sm">Buyer Dashboard</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <a href="/buyer-dashboard" className="flex items-center p-2 rounded-md bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors duration-200">
                <List className="h-5 w-5 mr-3" /> Dashboard
              </a>
            </li>
            <li>
              <a href="/buyer/search-inventory" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <Search className="h-5 w-5 mr-3" /> Search Inventory
              </a>
            </li>
            <li>
              <a href="/buyer/my-orders" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5 mr-3" /> My Orders
              </a>
            </li>
            <li>
              <a href="/buyer/rfq" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                RFQ
              </a>
            </li>
            <li>
              <a href="/buyer/watchlist" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <Eye className="h-5 w-5 mr-3" /> Watchlist
              </a>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="/buyer/kyc-status" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  KYC Status
                </a>
              </li>
              <li>
                <a href="/buyer/settings" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <Settings className="h-5 w-5 mr-3" /> Settings
                </a>
              </li>
              <li>
                <a href="/buyer/support" className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <LifeBuoy className="h-5 w-5 mr-3" /> Support
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
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, John. Here's what's happening with your account.</p>
          </div>
          {/* User Profile/Notifications */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" /></svg>
            </Button>
            <div className="flex items-center space-x-2">
              <img src="https://placehold.co/40x40/AEC6CF/FFFFFF?text=JS" alt="John Smith" className="h-10 w-10 rounded-full" />
              <span className="font-medium text-gray-800 hidden sm:block">John Smith</span>
            </div>
          </div>
        </div>

        {/* KYC Status */}
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md flex justify-between items-center">
          <span>
            <span className="font-semibold">KYC Status: Verified</span>: Your account is fully verified and ready for trading
          </span>
          <CheckCircle className="h-5 w-5" />
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
                <p className="text-xs text-gray-500">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity and Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-lg shadow-sm p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</CardTitle>
            <ul className="space-y-4">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                  <div>
                    <p className="text-gray-700">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Recent Orders</CardTitle>
              <Button variant="link" className="text-blue-600 hover:underline" onClick={() => navigate('/buyer/my-orders')}>
                View All
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.item}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Saved Searches and Watchlist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-lg shadow-sm p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Saved Searches</CardTitle>
            <ul className="space-y-4">
              {savedSearches.map((search) => (
                <li key={search.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{search.query}</p>
                    <p className="text-sm text-gray-500">{search.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => navigate(`/search-results?q=${encodeURIComponent(search.query)}`)}>
                    <ExternalLink className="h-4 w-4 text-gray-500" />
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="rounded-lg shadow-sm p-6">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Watchlist</CardTitle>
            <ul className="space-y-4">
              {watchlistItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{item.name}</p>
                    <p className="text-sm text-blue-600">{item.price}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => console.log('Remove from watchlist', item.id)}>
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboardPage;
