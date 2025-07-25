import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { BarChart, LineChart, PieChart, Download, DollarSign, Package, Eye, TrendingUp } from 'lucide-react'; // Icons

const SellerReportsPage = () => {
  const navigate = useNavigate();

  // Dummy data for reports
  const salesSummary = {
    totalRevenue: '₹1,25,000',
    totalOrders: 50,
    averageOrderValue: '₹2,500',
    conversionRate: '5.2%',
  };

  const topSellingItems = [
    { id: 'item-1', name: 'High-Grade Steel Coils', revenue: '₹75,000', unitsSold: 15 },
    { id: 'item-2', name: 'Electronic Microcontrollers', revenue: '₹20,000', unitsSold: 150 },
    { id: 'item-3', name: 'Industrial Bearings', revenue: '₹15,000', unitsSold: 20 },
  ];

  const inventoryOverview = {
    activeListings: 143,
    totalQuantityListed: '500 Tons',
    outOfStockItems: 5,
    draftListings: 10,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart className="h-6 w-6 mr-2" /> Sales & Performance Reports
            </CardTitle>
            <CardDescription className="text-gray-600">
              Gain insights into your sales, inventory, and listing performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Sales Summary</h3>
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
                  <Download className="h-4 w-4 mr-2" /> Download Report
                </Button>
              </div>
            </div>

            {/* Sales Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                  <DollarSign className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{salesSummary.totalRevenue}</div>
                  <p className="text-xs text-gray-500">+10% from previous period</p>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Orders</CardTitle>
                  <Package className="h-5 w-5 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{salesSummary.totalOrders}</div>
                  <p className="text-xs text-gray-500">+5 new orders</p>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Avg. Order Value</CardTitle>
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{salesSummary.averageOrderValue}</div>
                  <p className="text-xs text-gray-500">Stable</p>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
                  <Eye className="h-5 w-5 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{salesSummary.conversionRate}</div>
                  <p className="text-xs text-gray-500">+0.5% from previous period</p>
                </CardContent>
              </Card>
            </div>

            {/* Sales Trend Chart Placeholder */}
            <Card className="p-6 rounded-lg shadow-sm mb-8">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</CardTitle>
              <div className="h-64 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
                [Line Chart: Sales over time]
              </div>
            </Card>

            {/* Top Selling Items */}
            <Card className="p-6 rounded-lg shadow-sm mb-8">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Top Selling Items</CardTitle>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Units Sold</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSellingItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.revenue}</TableCell>
                      <TableCell>{item.unitsSold}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {/* Inventory Overview */}
            <Card className="p-6 rounded-lg shadow-sm">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-4">Inventory Overview</CardTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Active Listings:</strong> {inventoryOverview.activeListings}</p>
                  <p className="text-gray-700"><strong>Total Quantity Listed:</strong> {inventoryOverview.totalQuantityListed}</p>
                  <p className="text-gray-700"><strong>Out of Stock Items:</strong> <span className="text-red-600">{inventoryOverview.outOfStockItems}</span></p>
                  <p className="text-gray-700"><strong>Draft Listings:</strong> {inventoryOverview.draftListings}</p>
                </div>
                <div className="h-48 flex items-center justify-center text-gray-500 bg-gray-50 rounded-md">
                  [Pie Chart: Inventory Status]
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerReportsPage;
