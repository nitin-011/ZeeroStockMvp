import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'; // For business type
import { User, Lock, Bell, Banknote, Trash2, Building2 } from 'lucide-react'; // Icons

const SellerSettingsPage = () => {
  const navigate = useNavigate();

  // Dummy state for form fields (pre-filled for editing scenario)
  const [profile, setProfile] = useState({
    fullName: 'Ravi Kumar',
    email: 'ravi.kumar@example.com',
    phone: '+91 99887 76655',
    companyName: 'Sunrise Manufacturing Pvt Ltd',
    businessType: 'Textile Mill',
    gstin: '27ABCDE1234F1Z5',
    bankAccount: 'XXXXXXXXX1234', // Masked
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [bidNotifications, setBidNotifications] = useState(true); // Specific to sellers

  const businessTypes = [
    'Electronics Manufacturer', 'Automotive Supplier', 'Textile Mill',
    'Chemical Producer', 'Machinery & Equipment', 'Packaging Solutions',
    'Raw Material Supplier', 'Other'
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSelectChange = (value, field) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleProfileSave = () => {
    console.log('Saving seller profile:', profile);
    // API call to update profile
    alert('Seller profile updated successfully!'); // Replace with Shadcn Toast/Dialog
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match.'); // Replace with Shadcn Toast/Dialog
      return;
    }
    console.log('Changing password:', { currentPassword, newPassword });
    // API call to change password
    alert('Password changed successfully!'); // Replace with Shadcn Toast/Dialog
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleNotificationSave = () => {
    console.log('Saving seller notification settings:', { emailNotifications, inAppNotifications, bidNotifications });
    // API call to update notification settings
    alert('Notification settings updated!'); // Replace with Shadcn Toast/Dialog
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your seller account? This action cannot be undone.')) { // Replace with Shadcn AlertDialog
      console.log('Deleting seller account...');
      // API call to delete account
      alert('Seller account deleted successfully.'); // Replace with Shadcn Toast/Dialog
      navigate('/'); // Redirect to homepage after deletion
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Seller Account Settings</h1>
        <p className="text-gray-600">Manage your business profile, security, and notification preferences.</p>

        {/* Business Profile Information */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <Building2 className="h-5 w-5 mr-2" /> Business Profile
            </CardTitle>
            <CardDescription className="text-gray-600">
              Update your company and contact details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Contact Person Name</Label>
                <Input id="fullName" type="text" value={profile.fullName} onChange={handleInputChange} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={profile.email} onChange={handleInputChange} className="rounded-md" disabled />
                <p className="text-xs text-gray-500">Email cannot be changed.</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={profile.phone} onChange={handleInputChange} className="rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" type="text" value={profile.companyName} onChange={handleInputChange} className="rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select value={profile.businessType} onValueChange={(value) => handleSelectChange(value, 'businessType')}>
                <SelectTrigger id="businessType" className="rounded-md">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gstin">GSTIN</Label>
              <Input id="gstin" type="text" value={profile.gstin} onChange={handleInputChange} className="rounded-md" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleProfileSave}>
              Save Business Profile
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Password Management */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <Lock className="h-5 w-5 mr-2" /> Password Management
            </CardTitle>
            <CardDescription className="text-gray-600">
              Change your account password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="rounded-md" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input id="confirmNewPassword" type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="rounded-md" />
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleChangePassword}>
              Change Password
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Notification Settings */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <Bell className="h-5 w-5 mr-2" /> Notification Settings
            </CardTitle>
            <CardDescription className="text-gray-600">
              Control how you receive notifications from the platform.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="emailNotifications">Email Notifications</Label>
              <Switch id="emailNotifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="inAppNotifications">In-App Notifications</Label>
              <Switch id="inAppNotifications" checked={inAppNotifications} onCheckedChange={setInAppNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="bidNotifications">New Bid/Offer Notifications</Label>
              <Switch id="bidNotifications" checked={bidNotifications} onCheckedChange={setBidNotifications} />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleNotificationSave}>
              Save Notification Settings
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Bank Account Details (Placeholder) */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <Banknote className="h-5 w-5 mr-2" /> Bank Account Details
            </CardTitle>
            <CardDescription className="text-gray-600">
              Manage your bank account for payouts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="bankAccount">Linked Bank Account</Label>
              <Input id="bankAccount" type="text" value={profile.bankAccount} disabled className="rounded-md bg-gray-50" />
              <p className="text-xs text-gray-500">For security, full details are masked. Contact support to change.</p>
            </div>
            <Button variant="outline" className="mt-4" onClick={() => navigate('/seller/support')}>
              Update Bank Details (via Support)
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Delete Account */}
        <Card className="p-6 rounded-lg shadow-sm border-red-200 bg-red-50">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-red-800 flex items-center">
              <Trash2 className="h-5 w-5 mr-2" /> Delete Account
            </CardTitle>
            <CardDescription className="text-red-600">
              Permanently delete your seller account and all associated data. This action cannot be undone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2" onClick={handleDeleteAccount}>
              Delete My Seller Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerSettingsPage;
