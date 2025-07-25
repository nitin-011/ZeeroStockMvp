import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { BarChart, LineChart, PieChart, Download, Users, DollarSign, Package, TrendingUp, Activity, FileText } from 'lucide-react'; // Icons

const AdminReportsPage = () => {
  const navigate = useNavigate();

  // Dummy data for various reports
  const platformPerformance = {
    totalUsers: '12,847',
    activeUsers: '9,500',
    newRegistrations: '500 (last 30 days)',
    conversionRate: '5.2%',
    totalListings: '3,254',
    listingsApproved: '2,900',
  };

  const financialSummary = {
    totalRevenue: '₹1,50,000',
    totalPayouts: '₹1,20,000',
    platformFees: '₹30,000',
    pendingPayouts: '₹5,000',
  };

  const topCategoriesBySales = [
    { name: 'Raw Materials', sales: '₹60,000', transactions: 150 },
    { name: 'Components', sales: '₹40,000', transactions: 200 },
    { name: 'Machinery', sales: '₹30,000', transactions: 50 },
  ];

  const recentUserActivity = [
    { id: 1, user: 'John Smith (Buyer)', action: 'Viewed Product: Steel Coils', timestamp: '2024-07-25 10:00 AM' },
    { id: 2, user: 'Ravi Kumar (Seller)', action: 'Updated Listing: CNC Spares', timestamp: '2024-07-25 09:30 AM' },
    { id: 3, user: 'Priya Sharma (Buyer)', action: 'Placed Order: ORD-2024-006', timestamp: '2024-07-24 05:15 PM' },
  ];

  const handleDownloadReport = (reportType) => {
    console.log(`Downloading ${reportType} report...`);
    alert(`Simulating download for ${reportType} report.`);
    // In a real app, trigger an API endpoint to generate and download the report
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <FileText className="h-6 w-6 mr-2" /> Comprehensive Reports
            </CardTitle>
            <CardDescription className="text-gray-600">
              Generate and analyze detailed reports on platform performance, financials, and user activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Platform Performance Overview */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><TrendingUp className="h-5 w-5 mr-2" /> Platform Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{platformPerformance.totalUsers}</div>
                  <p className="text-xs text-gray-500">Active: {platformPerformance.activeUsers}</p>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">New Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{platformPerformance.newRegistrations}</div>
                  <p className="text-xs text-gray-500">Conversion Rate: {platformPerformance.conversionRate}</p>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{platformPerformance.totalListings}</div>
                  <p className="text-xs text-gray-500">Approved: {platformPerformance.listingsApproved}</p>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" className="mb-8" onClick={() => handleDownloadReport('Platform Performance')}>
              <Download className="h-4 w-4 mr-2" /> Download Performance Report
            </Button>

            <Separator className="my-8" />

            {/* Financial Reports */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><DollarSign className="h-5 w-5 mr-2" /> Financial Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Platform Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{financialSummary.totalRevenue}</div>
                  <p className="text-xs text-gray-500">From commission & fees</p>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Payouts to Sellers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{financialSummary.totalPayouts}</div>
                  <p className="text-xs text-gray-500">Pending Payouts: {financialSummary.pendingPayouts}</p>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" className="mb-8" onClick={() => handleDownloadReport('Financial Summary')}>
              <Download className="h-4 w-4 mr-2" /> Download Financial Report
            </Button>

            <Separator className="my-8" />

            {/* Market Insights / Top Categories */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><PieChart className="h-5 w-5 mr-2" /> Market Insights</h3>
            <Card className="p-6 rounded-lg shadow-sm mb-8">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Top Categories by Sales Volume</CardTitle>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Total Sales (INR)</TableHead>
                    <TableHead>Number of Transactions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topCategoriesBySales.map((category, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{category.name}</TableCell>
                      <TableCell>{category.sales}</TableCell>
                      <TableCell>{category.transactions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button variant="link" className="mt-4 text-blue-600 hover:underline" onClick={() => console.log('View detailed market insights')}>
                View Detailed Market Insights
              </Button>
            </Card>
            <Button variant="outline" className="mb-8" onClick={() => handleDownloadReport('Market Insights')}>
              <Download className="h-4 w-4 mr-2" /> Download Market Insights Report
            </Button>

            <Separator className="my-8" />

            {/* User Activity Logs */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><Activity className="h-5 w-5 mr-2" /> Recent User Activity Logs</h3>
            <Card className="p-6 rounded-lg shadow-sm">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</CardTitle>
              <div className="max-h-80 overflow-y-auto">
                <ul className="space-y-3">
                  {recentUserActivity.map(log => (
                    <li key={log.id} className="p-3 bg-gray-50 rounded-md border border-gray-200">
                      <p className="font-medium text-gray-800">
                        <span className="text-blue-600">{log.user}</span>: {log.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="link" className="mt-4 text-blue-600 hover:underline" onClick={() => console.log('View full activity logs')}>
                View Full Activity Logs
              </Button>
            </Card>
            <Button variant="outline" className="mt-8" onClick={() => handleDownloadReport('User Activity Logs')}>
              <Download className="h-4 w-4 mr-2" /> Download Activity Log
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReportsPage;
