import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { BarChart2, LineChart, PieChart, Users, DollarSign, Package, TrendingUp, Download } from 'lucide-react'; // Icons

const AdminAnalyticsPage = () => {
  const navigate = useNavigate();

  // Dummy data for overview stats
  const overviewStats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12% from last month',
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      title: 'Total Revenue',
      value: '₹1,50,000',
      change: '+15% from last month',
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
    },
    {
      title: 'Active Listings',
      value: '3,254',
      change: '+8% from last week',
      icon: <Package className="h-5 w-5 text-purple-500" />,
    },
    {
      title: 'Avg. Transaction Value',
      value: '₹4,500',
      change: 'Stable',
      icon: <TrendingUp className="h-5 w-5 text-yellow-500" />,
    },
  ];

  // Dummy data for recent activity (could be from logs)
  const recentActivityLogs = [
    { id: 1, type: 'User Registered', details: 'New buyer: Rahul Sharma', date: '2024-07-24 10:30 AM' },
    { id: 2, type: 'Listing Approved', details: 'Steel Coils by MetalFab India', date: '2024-07-24 09:15 AM' },
    { id: 3, type: 'Order Completed', details: 'Order #ORD-2024-005', date: '2024-07-23 05:00 PM' },
    { id: 4, type: 'Verification Pending', details: 'Seller: Tech Innovators', date: '2024-07-23 02:45 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart2 className="h-6 w-6 mr-2" /> Platform Analytics
            </CardTitle>
            <CardDescription className="text-gray-600">
              Comprehensive insights into platform performance and user engagement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Analytics Period Selector and Download */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
              <div className="flex items-center space-x-2">
                <Select defaultValue="last30days">
                  <SelectTrigger className="w-[180px] rounded-md">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="last7days">Last 7 Days</SelectItem>
                    <SelectItem value="last30days">Last 30 Days</SelectItem>
                    <SelectItem value="thismonth">This Month</SelectItem>
                    <SelectItem value="thisyear">This Year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="rounded-md">
                  <Download className="h-4 w-4 mr-2" /> Export Data
                </Button>
              </div>
            </div>

            {/* Overview Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {overviewStats.map((stat, index) => (
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 rounded-lg shadow-sm">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-4">User Registration Trend</CardTitle>
                <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
                  [Line Chart: New User Registrations over time]
                </div>
              </Card>
              <Card className="p-6 rounded-lg shadow-sm">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Transaction Volume</CardTitle>
                <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
                  [Bar Chart: Transactions per month/week]
                </div>
              </Card>
              <Card className="p-6 rounded-lg shadow-sm lg:col-span-2">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Top Categories by Listing / Sales</CardTitle>
                <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
                  [Pie Chart: Category Distribution]
                </div>
              </Card>
            </div>

            {/* Recent Activity Logs */}
            <Card className="p-6 rounded-lg shadow-sm">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Recent Activity Logs</CardTitle>
              <div className="max-h-80 overflow-y-auto">
                <ul className="space-y-3">
                  {recentActivityLogs.map(log => (
                    <li key={log.id} className="p-3 bg-gray-50 rounded-md border border-gray-200">
                      <p className="font-medium text-gray-800">{log.type}: <span className="text-gray-700">{log.details}</span></p>
                      <p className="text-xs text-gray-500 mt-1">{log.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="link" className="mt-4 text-blue-600 hover:underline" onClick={() => console.log('View full logs')}>
                View Full Activity Logs
              </Button>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
