import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Checkbox } from '../../components/ui/checkbox';
import { Progress } from '../../components/ui/progress'; // For wizard progress
import { Package, FileText, Camera, DollarSign, Truck, Globe, CheckCircle } from 'lucide-react'; // Icons

const ListNewItemPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // 1: Basic Info, 2: Details, 3: Pricing & Logistics, 4: Review
  const totalSteps = 4;

  // Dummy state for form data (in a real app, this would be more robust, e.g., using React Hook Form)
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: '',
    condition: '',
    quantity: '',
    unit: 'units',
    dimensions: '',
    weight: '',
    certifications: '',
    images: [], // Array of file objects or base64 strings
    pricingOption: 'fixed', // 'fixed', 'minimum', 'auction'
    fixedPrice: '',
    minimumPrice: '',
    auctionStartTime: '',
    auctionEndTime: '',
    logisticsOption: 'seller-managed', // 'seller-managed', 'platform-integrated'
    shippingNotes: '',
    geoRestrictions: [],
    anonymousTransaction: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files.map(file => ({ name: file.name, url: URL.createObjectURL(file) }))]
    }));
  };

  const handleNext = () => {
    // Basic validation for current step (can be expanded)
    if (currentStep === 1) {
      if (!formData.itemName || !formData.category || !formData.description || !formData.condition || !formData.quantity) {
        alert('Please fill in all required fields for Basic Information.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmitListing = () => {
    console.log('Submitting Listing:', formData);
    // In a real app, send data to backend API for listing creation and Admin review
    alert('Listing submitted successfully! It will be reviewed by an administrator.'); // Replace with Shadcn Dialog/Toast
    navigate('/seller-dashboard'); // Redirect to dashboard
  };

  const categories = ['Raw Materials', 'Components', 'Machinery', 'Packaging', 'Chemicals', 'Electronics', 'Other'];
  const conditions = ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'];
  const units = ['units', 'kg', 'tons', 'meters', 'pieces', 'lots'];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Package className="h-6 w-6 mr-2" /> List New Item
            </CardTitle>
            <CardDescription className="text-gray-600">
              Guide to listing your excess manufacturing inventory.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Bar */}
            <div className="mb-8">
              <Progress value={(currentStep / totalSteps) * 100} className="w-full h-2" />
              <div className="text-center text-sm text-gray-600 mt-2">Step {currentStep} of {totalSteps}</div>
            </div>

            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><FileText className="h-5 w-5 mr-2" /> Basic Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="itemName">Item Name</Label>
                  <Input id="itemName" type="text" placeholder="e.g., Stainless Steel Sheets, ATmega328P Microcontrollers" value={formData.itemName} onChange={handleInputChange} required className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange(value, 'category')}>
                    <SelectTrigger id="category" className="rounded-md">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>{cat}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea id="description" placeholder="Briefly describe the item (e.g., unused, condition, key features)" value={formData.description} onChange={handleInputChange} rows={3} required className="rounded-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => handleSelectChange(value, 'condition')}>
                      <SelectTrigger id="condition" className="rounded-md">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map(cond => <SelectItem key={cond} value={cond.toLowerCase().replace(/\s/g, '-')}>{cond}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Available</Label>
                    <div className="flex space-x-2">
                      <Input id="quantity" type="number" placeholder="e.g., 500" value={formData.quantity} onChange={handleInputChange} required className="rounded-md flex-grow" />
                      <Select value={formData.unit} onValueChange={(value) => handleSelectChange(value, 'unit')}>
                        <SelectTrigger id="unit" className="w-[100px] rounded-md">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          {units.map(unit => <SelectItem key={unit} value={unit}>{unit}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base mt-8" onClick={handleNext}>
                  Next: Detailed Specifications
                </Button>
              </div>
            )}

            {/* Step 2: Detailed Specifications & Media */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><Camera className="h-5 w-5 mr-2" /> Detailed Specifications & Media</h3>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (Optional)</Label>
                  <Input id="dimensions" type="text" placeholder="e.g., 120cm x 80cm x 50cm" value={formData.dimensions} onChange={handleInputChange} className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (Optional)</Label>
                  <Input id="weight" type="text" placeholder="e.g., 25 kg, 1.5 tons" value={formData.weight} onChange={handleInputChange} className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certifications">Certifications / Standards (Optional)</Label>
                  <Input id="certifications" type="text" placeholder="e.g., ISO 9001, CE, RoHS" value={formData.certifications} onChange={handleInputChange} className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="images">Product Images / Videos</Label>
                  <Input id="images" type="file" multiple onChange={handleImageUpload} className="rounded-md" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.images.map((img, index) => (
                      <div key={index} className="relative">
                        <img src={img.url} alt={`Uploaded ${img.name}`} className="h-24 w-24 object-cover rounded-md" />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-0 right-0 h-6 w-6 rounded-full -mt-2 -mr-2"
                          onClick={() => setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))}
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Upload high-quality images or short videos of your product.</p>
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handleBack} className="rounded-md py-2 text-base">
                    Back
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base" onClick={handleNext}>
                    Next: Pricing & Logistics
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Pricing & Logistics */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><DollarSign className="h-5 w-5 mr-2" /> Pricing & Logistics</h3>
                <div className="space-y-2">
                  <Label>Pricing Option</Label>
                  <RadioGroup value={formData.pricingOption} onValueChange={(value) => handleSelectChange(value, 'pricingOption')} className="flex space-x-4">
                    <Label htmlFor="fixed" className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <span>Fixed Price</span>
                    </Label>
                    <Label htmlFor="minimum" className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem value="minimum" id="minimum" />
                      <span>Minimum Price (Negotiable)</span>
                    </Label>
                    <Label htmlFor="auction" className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem value="auction" id="auction" />
                      <span>Auction</span>
                    </Label>
                  </RadioGroup>
                </div>

                {formData.pricingOption === 'fixed' && (
                  <div className="space-y-2">
                    <Label htmlFor="fixedPrice">Fixed Price (INR)</Label>
                    <Input id="fixedPrice" type="number" placeholder="e.g., 55000" value={formData.fixedPrice} onChange={handleInputChange} required className="rounded-md" />
                  </div>
                )}
                {formData.pricingOption === 'minimum' && (
                  <div className="space-y-2">
                    <Label htmlFor="minimumPrice">Minimum Acceptable Price (INR)</Label>
                    <Input id="minimumPrice" type="number" placeholder="e.g., 50000" value={formData.minimumPrice} onChange={handleInputChange} required className="rounded-md" />
                  </div>
                )}
                {formData.pricingOption === 'auction' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="auctionStartTime">Auction Start Time</Label>
                      <Input id="auctionStartTime" type="datetime-local" value={formData.auctionStartTime} onChange={handleInputChange} required className="rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="auctionEndTime">Auction End Time</Label>
                      <Input id="auctionEndTime" type="datetime-local" value={formData.auctionEndTime} onChange={handleInputChange} required className="rounded-md" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Logistics & Shipping</Label>
                  <RadioGroup value={formData.logisticsOption} onValueChange={(value) => handleSelectChange(value, 'logisticsOption')} className="flex space-x-4">
                    <Label htmlFor="seller-managed" className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem value="seller-managed" id="seller-managed" />
                      <span>Seller-Managed Shipping</span>
                    </Label>
                    <Label htmlFor="platform-integrated" className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem value="platform-integrated" id="platform-integrated" />
                      <span>Platform-Integrated Logistics</span>
                    </Label>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingNotes">Shipping Notes (Optional)</Label>
                  <Textarea id="shippingNotes" placeholder="e.g., Buyer to arrange pickup, special handling instructions" value={formData.shippingNotes} onChange={handleInputChange} rows={3} className="rounded-md" />
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handleBack} className="rounded-md py-2 text-base">
                    Back
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base" onClick={handleNext}>
                    Next: Review & Publish
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Publish */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> Review & Publish</h3>
                <Card className="p-4 rounded-lg bg-gray-50 space-y-3">
                  <h4 className="font-semibold text-lg text-gray-800">Item Overview</h4>
                  <p><strong>Item Name:</strong> {formData.itemName || 'N/A'}</p>
                  <p><strong>Category:</strong> {formData.category || 'N/A'}</p>
                  <p><strong>Description:</strong> {formData.description || 'N/A'}</p>
                  <p><strong>Condition:</strong> {formData.condition || 'N/A'}</p>
                  <p><strong>Quantity:</strong> {formData.quantity ? `${formData.quantity} ${formData.unit}` : 'N/A'}</p>
                  {formData.images.length > 0 && (
                    <div>
                      <p><strong>Images:</strong></p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {formData.images.map((img, index) => (
                          <img key={index} src={img.url} alt={img.name} className="h-16 w-16 object-cover rounded-md" />
                        ))}
                      </div>
                    </div>
                  )}
                </Card>

                <Card className="p-4 rounded-lg bg-gray-50 space-y-3">
                  <h4 className="font-semibold text-lg text-gray-800">Pricing & Logistics</h4>
                  <p><strong>Pricing Option:</strong> {formData.pricingOption || 'N/A'}</p>
                  {formData.pricingOption === 'fixed' && <p><strong>Fixed Price:</strong> ₹{formData.fixedPrice || 'N/A'}</p>}
                  {formData.pricingOption === 'minimum' && <p><strong>Minimum Price:</strong> ₹{formData.minimumPrice || 'N/A'}</p>}
                  {formData.pricingOption === 'auction' && (
                    <>
                      <p><strong>Auction Start:</strong> {formData.auctionStartTime ? new Date(formData.auctionStartTime).toLocaleString() : 'N/A'}</p>
                      <p><strong>Auction End:</strong> {formData.auctionEndTime ? new Date(formData.auctionEndTime).toLocaleString() : 'N/A'}</p>
                    </>
                  )}
                  <p><strong>Logistics:</strong> {formData.logisticsOption || 'N/A'}</p>
                  <p><strong>Shipping Notes:</strong> {formData.shippingNotes || 'N/A'}</p>
                </Card>

                <div className="flex items-center space-x-2">
                  <Checkbox id="agreePublish" checked={true} disabled className="rounded" /> {/* Always checked for review */}
                  <Label htmlFor="agreePublish" className="text-sm">
                    I confirm all details are accurate and agree to publish this listing.
                  </Label>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handleBack} className="rounded-md py-2 text-base">
                    Back
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base" onClick={handleSubmitListing}>
                    Publish Listing
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListNewItemPage;
