import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { Textarea } from '../../components/ui/textarea';
import { Settings, List, DollarSign, Bell, Shield, Plus, Edit, Trash2 } from 'lucide-react'; // Icons

const AdminSettingsPage = () => {
  const navigate = useNavigate();

  // Dummy state for form fields
  const [generalSettings, setGeneralSettings] = useState({
    platformName: 'ZeeroStock',
    contactEmail: 'admin@zeerostock.com',
    supportPhone: '+91 8000 123456',
  });

  const [feeStructures, setFeeStructures] = useState({
    commissionRate: 5, // percentage
    listingFee: 100, // INR
    paymentProcessingFee: 2.5, // percentage
  });

  const [notificationTemplates, setNotificationTemplates] = useState({
    newOfferEmailSubject: 'New Offer Received on Your Listing',
    newOfferEmailBody: 'Dear {sellerName}, you have received a new offer for your listing "{listingName}" from {buyerName}. Amount: {offerAmount}. View details on your dashboard.',
    orderConfirmationEmailSubject: 'Your ZeeroStock Order Confirmation',
    orderConfirmationEmailBody: 'Dear {userName}, your order {orderId} has been confirmed. Total: {totalAmount}.',
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuthEnabled: true,
    auditLoggingEnabled: true,
  });

  const [categories, setCategories] = useState([
    { id: 1, name: 'Raw Materials', subcategories: ['Steel', 'Aluminum', 'Plastics'] },
    { id: 2, name: 'Components', subcategories: ['Electronic Parts', 'Mechanical Parts'] },
    { id: 3, name: 'Machinery', subcategories: ['CNC Machines', 'Lathes', 'Presses'] },
  ]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSubcategoryName, setNewSubcategoryName] = useState('');
  const [selectedCategoryForSub, setSelectedCategoryForSub] = useState('');


  const handleGeneralSettingsSave = () => {
    console.log('Saving general settings:', generalSettings);
    alert('General settings updated successfully!');
  };

  const handleFeeStructuresSave = () => {
    console.log('Saving fee structures:', feeStructures);
    alert('Fee structures updated successfully!');
  };

  const handleNotificationTemplatesSave = () => {
    console.log('Saving notification templates:', notificationTemplates);
    alert('Notification templates updated successfully!');
  };

  const handleSecuritySettingsSave = () => {
    console.log('Saving security settings:', securitySettings);
    alert('Security settings updated successfully!');
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      setCategories(prev => [...prev, { id: Date.now(), name: newCategoryName.trim(), subcategories: [] }]);
      setNewCategoryName('');
      alert('Category added!');
    }
  };

  const handleAddSubcategory = () => {
    if (selectedCategoryForSub && newSubcategoryName.trim()) {
      setCategories(prev =>
        prev.map(cat =>
          cat.name === selectedCategoryForSub
            ? { ...cat, subcategories: [...cat.subcategories, newSubcategoryName.trim()] }
            : cat
        )
      );
      setNewSubcategoryName('');
      alert('Subcategory added!');
    }
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm('Are you sure you want to delete this category and all its subcategories?')) {
      setCategories(prev => prev.filter(cat => cat.id !== id));
      alert('Category deleted!');
    }
  };

  const handleDeleteSubcategory = (categoryName, subName) => {
    if (window.confirm(`Are you sure you want to delete subcategory "${subName}" from "${categoryName}"?`)) {
      setCategories(prev =>
        prev.map(cat =>
          cat.name === categoryName
            ? { ...cat, subcategories: cat.subcategories.filter(sub => sub !== subName) }
            : cat
        )
      );
      alert('Subcategory deleted!');
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Settings className="h-6 w-6 mr-2" /> System Settings
            </CardTitle>
            <CardDescription className="text-gray-600">
              Configure platform-wide settings and parameters.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* General Settings */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><Settings className="h-5 w-5 mr-2" /> General Settings</h3>
            <div className="space-y-4 mb-8">
              <div className="space-y-2">
                <Label htmlFor="platformName">Platform Name</Label>
                <Input id="platformName" value={generalSettings.platformName} onChange={(e) => setGeneralSettings({ ...generalSettings, platformName: e.target.value })} className="rounded-md" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input id="contactEmail" type="email" value={generalSettings.contactEmail} onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })} className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportPhone">Support Phone</Label>
                  <Input id="supportPhone" type="tel" value={generalSettings.supportPhone} onChange={(e) => setGeneralSettings({ ...generalSettings, supportPhone: e.target.value })} className="rounded-md" />
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleGeneralSettingsSave}>
                Save General Settings
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Category Management */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><List className="h-5 w-5 mr-2" /> Category Management</h3>
            <div className="space-y-6 mb-8">
              {/* Add New Category */}
              <div className="flex items-end gap-4">
                <div className="flex-grow space-y-2">
                  <Label htmlFor="newCategoryName">New Category Name</Label>
                  <Input id="newCategoryName" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} placeholder="e.g., Industrial Chemicals" className="rounded-md" />
                </div>
                <Button onClick={handleAddCategory} className="bg-green-600 hover:bg-green-700 text-white rounded-md">
                  <Plus className="h-4 w-4 mr-2" /> Add Category
                </Button>
              </div>

              {/* Add New Subcategory */}
              <div className="flex items-end gap-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="selectCategoryForSub">Select Parent Category</Label>
                  <Select value={selectedCategoryForSub} onValueChange={setSelectedCategoryForSub}>
                    <SelectTrigger id="selectCategoryForSub" className="rounded-md">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-grow space-y-2 w-1/2">
                  <Label htmlFor="newSubcategoryName">New Subcategory Name</Label>
                  <Input id="newSubcategoryName" value={newSubcategoryName} onChange={(e) => setNewSubcategoryName(e.target.value)} placeholder="e.g., Solvents" className="rounded-md" />
                </div>
                <Button onClick={handleAddSubcategory} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  <Plus className="h-4 w-4 mr-2" /> Add Subcategory
                </Button>
              </div>

              {/* Existing Categories */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Existing Categories & Subcategories:</h4>
                {categories.length === 0 ? (
                  <p className="text-gray-500 text-sm">No categories defined yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat.id} className="border p-3 rounded-md bg-gray-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{cat.name}</span>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteCategory(cat.id)}>
                            <Trash2 className="h-4 w-4 mr-1" /> Delete Category
                          </Button>
                        </div>
                        {cat.subcategories.length > 0 && (
                          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 text-sm">
                            {cat.subcategories.map(sub => (
                              <li key={sub} className="flex justify-between items-center">
                                <span>{sub}</span>
                                <Button variant="ghost" size="xs" className="text-red-400 hover:text-red-600" onClick={() => handleDeleteSubcategory(cat.name, sub)}>
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Fee Structures */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><DollarSign className="h-5 w-5 mr-2" /> Fee Structures</h3>
            <div className="space-y-4 mb-8">
              <div className="space-y-2">
                <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                <Input id="commissionRate" type="number" value={feeStructures.commissionRate} onChange={(e) => setFeeStructures({ ...feeStructures, commissionRate: parseFloat(e.target.value) })} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingFee">Listing Fee (INR)</Label>
                <Input id="listingFee" type="number" value={feeStructures.listingFee} onChange={(e) => setFeeStructures({ ...feeStructures, listingFee: parseFloat(e.target.value) })} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentProcessingFee">Payment Processing Fee (%)</Label>
                <Input id="paymentProcessingFee" type="number" value={feeStructures.paymentProcessingFee} onChange={(e) => setFeeStructures({ ...feeStructures, paymentProcessingFee: parseFloat(e.target.value) })} className="rounded-md" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleFeeStructuresSave}>
                Save Fee Structures
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Notification Templates */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><Bell className="h-5 w-5 mr-2" /> Notification Templates</h3>
            <div className="space-y-4 mb-8">
              <div className="space-y-2">
                <Label htmlFor="newOfferEmailSubject">New Offer Email Subject</Label>
                <Input id="newOfferEmailSubject" value={notificationTemplates.newOfferEmailSubject} onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailSubject: e.target.value })} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newOfferEmailBody">New Offer Email Body</Label>
                <Textarea id="newOfferEmailBody" value={notificationTemplates.newOfferEmailBody} onChange={(e) => setNotificationTemplates({ ...notificationTemplates, newOfferEmailBody: e.target.value })} rows={5} className="rounded-md" />
                <p className="text-xs text-gray-500">Use {'{variables}'} like {'{sellerName}'}, {'{listingName}'}, {'{offerAmount}'}.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderConfirmationEmailSubject">Order Confirmation Email Subject</Label>
                <Input id="orderConfirmationEmailSubject" value={notificationTemplates.orderConfirmationEmailSubject} onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailSubject: e.target.value })} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderConfirmationEmailBody">Order Confirmation Email Body</Label>
                <Textarea id="orderConfirmationEmailBody" value={notificationTemplates.orderConfirmationEmailBody} onChange={(e) => setNotificationTemplates({ ...notificationTemplates, orderConfirmationEmailBody: e.target.value })} rows={5} className="rounded-md" />
                <p className="text-xs text-gray-500">Use {'{variables}'} like {'{userName}'}, {'{orderId}'}, {'{totalAmount}'}.</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleNotificationTemplatesSave}>
                Save Notification Templates
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Security Settings */}
            <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4"><Shield className="h-5 w-5 mr-2" /> Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="twoFactorAuthEnabled">Two-Factor Authentication (2FA) for Admins</Label>
                <Switch id="twoFactorAuthEnabled" checked={securitySettings.twoFactorAuthEnabled} onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuthEnabled: checked })} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auditLoggingEnabled">Audit Logging</Label>
                <Switch id="auditLoggingEnabled" checked={securitySettings.auditLoggingEnabled} onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, auditLoggingEnabled: checked })} />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2" onClick={handleSecuritySettingsSave}>
                Save Security Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
