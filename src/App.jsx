import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Import public pages
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';


// Import Seller Pages
import SellerDashboardPage from './pages/seller/SellerKycDashboard';
import ListNewItemPage from './pages/seller/ListNewItemPage';
import ManageListingsPage from './pages/seller/ManageListingPage';
import OffersBidsPage from './pages/seller/OfferBidsPage';
import SellerOrdersPage from './pages/seller/SellerOrderPage';
import SellerKycStatusPage from './pages/seller/SellerKycDashboard';
import SellerSettingsPage from './pages/seller/SellerSettingPage';
import SellerReportsPage from './pages/seller/SellerReportPage';
import SellerProfileSetupPage from './pages/seller/SellerProfileSetupPage';

// Import Buyer Pages
import BuyerDashboardPage from './pages/buyer/BuyerDashBoardPage';
import ProductDetailPage from './pages/buyer/ProductDetailsPage';
import BuyerOrdersPage from './pages/buyer/BuyerOrderPage';
import RequestQuotePage from './pages/buyer/RequestForaQuotePage';
import BuyerWatchlistPage from './pages/buyer/BuyerWatchlistPage';
import BuyerKycStatusPage from './pages/buyer/BuyerKycStatus';
import BuyerSettingsPage from './pages/buyer/BuyerSettingsPage';
import BuyerCartPage from './pages/buyer/CartPage';
import BuyerCheckoutPage from './pages/buyer/CheckoutPage';
import BuyerProfileSetupPage from './pages/buyer/BuyerProfileSetupPage';


// Import Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminListingsPage from './pages/admin/AdminListingPage';
import AdminVerificationsPage from './pages/admin/AdminTransactionPage';
import AdminTransactionsPage from './pages/admin/AdminTransactionPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage.jsx.jsx';
import AdminReportsPage from './pages/admin/AdminReportsPage';


// Placeholder Admin Detail/Edit Pages

const ForSellersPage = () => (
  <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">For Sellers Page</h1>
    <p className="text-gray-600">Details for manufacturers looking to sell excess inventory.</p>
  </div>
);
const SearchInventoryPage = () => (
  <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Browse Inventory Page</h1>
    <p className="text-gray-600">Here you can search and filter available inventory.</p>
  </div>
);
const ForgotPasswordPage = () => (
  <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Forgot Password Page</h1>
    <p className="text-gray-600">Reset your password here.</p>
  </div>
);

// Placeholder for other pages
const OrderDetailsPage = () => (
  <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Details Page</h1>
    <p className="text-gray-600">Detailed information for a specific order.</p>
  </div>
);
const BuyerSupportPage = () => (
  <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Buyer: Support Page</h1>
    <p className="text-gray-600">Get help and support.</p>
  </div>
);
const EditListingPage = () => (
  <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold">Seller: Edit Listing Page</h1>
    <p className="text-gray-600">Edit your existing product listing.</p>
  </div>
);
const SellerSupportPage = () => (
  <div className="container mx-auto py-8 px-4"><h1 className="text-3xl font-bold">Seller: Support Page</h1></div>
);

const AdminUserDetailsPage = () => (
  <div className="container mx-auto py-8 px-4"><h1 className="text-3xl font-bold">Admin: User Details Page</h1></div>
);
const AdminEditUserPage = () => (
  <div className="container mx-auto py-8 px-4"><h1 className="text-3xl font-bold">Admin: Edit User Page</h1></div>
);
const AdminEditListingPage = () => (
  <div className="container mx-auto py-8 px-4"><h1 className="text-3xl font-bold">Admin: Edit Listing Page</h1></div>
);
const AdminTransactionDetailsPage = () => (
  <div className="container mx-auto py-8 px-4"><h1 className="text-3xl font-bold">Admin: Transaction Details Page</h1></div>
);


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Public navigation links from Navbar/Hero */}
            <Route path="/for-sellers" element={<ForSellersPage />} />
            <Route path="/search-inventory" element={<SearchInventoryPage />} />
            <Route path="/search-results" element={<SearchInventoryPage />} />

            {/* Product Detail Page */}
            <Route path="/product/:productId" element={<ProductDetailPage />} />

            {/* Seller Routes */}
            <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
            <Route path="/seller/list-new-item" element={<ListNewItemPage />} />
            <Route path="/seller/manage-listings" element={<ManageListingsPage />} />
            <Route path="/seller/edit-listing/:listingId" element={<EditListingPage />} />
            <Route path="/seller/offers-bids" element={<OffersBidsPage />} />
            <Route path="/seller/my-orders" element={<SellerOrdersPage />} />
            <Route path="/seller/kyc-status" element={<SellerKycStatusPage />} />
            <Route path="/seller/settings" element={<SellerSettingsPage />} />
            <Route path="/seller/reports" element={<SellerReportsPage />} />
            <Route path="/seller/profile-setup" element={<SellerProfileSetupPage />} />
            <Route path="/seller/support" element={<SellerSupportPage />} />

            {/* Buyer Routes */}
            <Route path="/buyer-dashboard" element={<BuyerDashboardPage />} />
            <Route path="/buyer/search-inventory" element={<SearchInventoryPage />} />
            <Route path="/buyer/my-orders" element={<BuyerOrdersPage />} />
            <Route path="/buyer/order-details/:orderId" element={<OrderDetailsPage />} />
            <Route path="/buyer/rfq" element={<RequestQuotePage />} />
            <Route path="/buyer/watchlist" element={<BuyerWatchlistPage />} />
            <Route path="/buyer/kyc-status" element={<BuyerKycStatusPage />} />
            <Route path="/buyer/settings" element={<BuyerSettingsPage />} />
            <Route path="/buyer/support" element={<BuyerSupportPage />} />
            <Route path="/buyer/cart" element={<BuyerCartPage />} />
            <Route path="/buyer/checkout" element={<BuyerCheckoutPage />} />
            <Route path="/buyer/profile-setup" element={<BuyerProfileSetupPage />} />

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/user-details/:userId" element={<AdminUserDetailsPage />} />
            <Route path="/admin/edit-user/:userId" element={<AdminEditUserPage />} />
            <Route path="/admin/listings" element={<AdminListingsPage />} />
            <Route path="/admin/edit-listing/:listingId" element={<AdminEditListingPage />} />
            <Route path="/admin/verifications" element={<AdminVerificationsPage />} />
            <Route path="/admin/transactions" element={<AdminTransactionsPage />} />
            <Route path="/admin/transaction-details/:transactionId" element={<AdminTransactionDetailsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route path="/admin/reports" element={<AdminReportsPage />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<div className="container mx-auto py-8 px-4"><h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1><p className="text-gray-600">The page you are looking for does not exist.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
