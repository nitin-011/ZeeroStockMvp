import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch'; // Assuming shadcn@latest add switch
import { Separator } from '../../components/ui/separator'; // Assuming shadcn@latest add separator
import { User, Lock, Bell, CreditCard, Trash2 } from 'lucide-react'; // Icons

const BuyerSettingsPage = () => {
  const navigate = useNavigate();

  // Dummy state for form fields (in a real app, these would be managed by Redux/API)
  const [name, setName] = useState('John Smith');
  const [email, setEmail] = useState('john.smith@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);

  const handleProfileSave = () => {
    console.log('Saving profile:', { name, email, phone });
    // API call to update profile
    alert('Profile updated successfully!'); // Replace with Shadcn Toast/Dialog
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
    console.log('Saving notification settings:', { emailNotifications, inAppNotifications });
    // API call to update notification settings
    alert('Notification settings updated!'); // Replace with Shadcn Toast/Dialog
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) { // Replace with Shadcn AlertDialog
      console.log('Deleting account...');
      // API call to delete account
      alert('Account deleted successfully.'); // Replace with Shadcn Toast/Dialog
      navigate('/'); // Redirect to homepage after deletion
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-600">Manage your profile, security, and preferences.</p>

        {/* Profile Information */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <User className="h-5 w-5 mr-2" /> Profile Information
            </CardTitle>
            <CardDescription className="text-gray-600">
              Update your personal and contact details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md" disabled />
                <p className="text-xs text-gray-500">Email cannot be changed.</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-md" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleProfileSave}>
              Save Profile
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
              Control how you receive notifications.
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
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleNotificationSave}>
              Save Notification Settings
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Payment Methods (Placeholder) */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" /> Payment Methods
            </CardTitle>
            <CardDescription className="text-gray-600">
              Manage your saved payment methods.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Payment method management coming soon!</p>
            <Button variant="outline" className="mt-4">Add Payment Method</Button>
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
              Permanently delete your account and all associated data. This action cannot be undone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2" onClick={handleDeleteAccount}>
              Delete My Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerSettingsPage;
