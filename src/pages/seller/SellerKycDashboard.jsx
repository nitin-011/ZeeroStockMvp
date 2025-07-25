import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { Progress } from '../../components/ui/progress';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { CheckCircle, AlertCircle, Upload, FileText, XCircle, Building2 } from 'lucide-react'; // Icons

const SellerKycStatusPage = () => {
  const navigate = useNavigate();

  // Dummy KYC Status (can be 'Verified', 'Pending', 'Rejected', 'More Info Needed')
  const [kycStatus, setKycStatus] = useState('Pending'); // Simulate initial pending status
  const [kycMessage, setKycMessage] = useState('Your KYC/KYB verification is pending. Please upload the required business documents.');
  const [progressValue, setProgressValue] = useState(30); // Simulate progress for pending

  // Dummy data for required documents (in a real app, this would come from an API)
  const requiredDocuments = [
    { id: 'doc1', name: 'Company Registration Certificate', uploaded: false, file: null },
    { id: 'doc2', name: 'GSTIN Certificate', uploaded: false, file: null },
    { id: 'doc3', name: 'Bank Account Details (Cancelled Cheque/Bank Statement)', uploaded: false, file: null },
    { id: 'doc4', name: 'PAN Card (Company/Proprietor)', uploaded: false, file: null },
    { id: 'doc5', name: 'Authorized Signatory Proof (e.g., Board Resolution, POA)', uploaded: false, file: null },
  ];

  const [documentsToUpload, setDocumentsToUpload] = useState(requiredDocuments);

  const handleFileUpload = (docId, event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Uploading ${file.name} for ${docId}`);
      // In a real app, you'd upload the file to storage (e.g., Firebase Storage, S3)
      // and then update the backend with the document status.
      setDocumentsToUpload(prevDocs =>
        prevDocs.map(doc =>
          doc.id === docId ? { ...doc, uploaded: true, file: file.name } : doc
        )
      );
      // Simulate progress update
      setProgressValue(prev => Math.min(prev + (70 / requiredDocuments.length), 100));
    }
  };

  const handleSubmitForReview = () => {
    const allUploaded = documentsToUpload.every(doc => doc.uploaded);
    if (allUploaded) {
      setKycStatus('Pending');
      setKycMessage('Documents submitted for review. This may take 3-5 business days for approval.');
      setProgressValue(100); // All documents uploaded
      console.log('Documents submitted for KYC/KYB review.');
      // In a real app, trigger backend process for review
    } else {
      alert('Please upload all required documents before submitting for review.'); // Using alert for simplicity here, replace with Shadcn Dialog
    }
  };

  const getStatusAlert = () => {
    switch (kycStatus) {
      case 'Verified':
        return (
          <Alert className="bg-green-100 border-green-400 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Verification Complete!</AlertTitle>
            <AlertDescription>Your business account is fully verified and ready to list inventory.</AlertDescription>
          </Alert>
        );
      case 'Pending':
        return (
          <Alert className="bg-blue-100 border-blue-400 text-blue-700 rounded-md">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Verification Pending</AlertTitle>
            <AlertDescription>{kycMessage}</AlertDescription>
            <Progress value={progressValue} className="w-full mt-4" />
          </Alert>
        );
      case 'Rejected':
        return (
          <Alert className="bg-red-100 border-red-400 text-red-700 rounded-md">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Verification Rejected</AlertTitle>
            <AlertDescription>{kycMessage} Please review the reasons and re-upload corrected documents.</AlertDescription>
            <Button variant="link" className="text-red-700 mt-2 px-0" onClick={() => setKycStatus('More Info Needed')}>Re-upload Documents</Button>
          </Alert>
        );
      case 'More Info Needed':
        return (
          <Alert className="bg-yellow-100 border-yellow-400 text-yellow-700 rounded-md">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>More Information Needed</AlertTitle>
            <AlertDescription>{kycMessage} Please provide the additional details requested to proceed with verification.</AlertDescription>
            <Button variant="link" className="text-yellow-700 mt-2 px-0" onClick={() => setKycStatus('Pending')}>Continue Upload</Button>
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Building2 className="h-6 w-6 mr-2" /> KYC/KYB Verification Status
            </CardTitle>
            <CardDescription className="text-gray-600">
              Complete your Know Your Customer (KYC) and Know Your Business (KYB) verification to gain full selling privileges.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {getStatusAlert()}

            {(kycStatus === 'Pending' || kycStatus === 'More Info Needed') && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Required Documents:</h3>
                {documentsToUpload.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                    <Label htmlFor={`file-${doc.id}`} className="flex items-center space-x-2 flex-grow cursor-pointer">
                      <FileText className="h-5 w-5 text-gray-500" />
                      <span>{doc.name}</span>
                      {doc.uploaded && <span className="text-green-600 text-sm ml-2">(Uploaded: {doc.file})</span>}
                    </Label>
                    <Input
                      id={`file-${doc.id}`}
                      type="file"
                      className="hidden" // Hide the default file input
                      onChange={(e) => handleFileUpload(doc.id, e)}
                      disabled={doc.uploaded}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="ml-4"
                      onClick={() => document.getElementById(`file-${doc.id}`).click()}
                      disabled={doc.uploaded}
                    >
                      <Upload className="h-4 w-4 mr-2" /> {doc.uploaded ? 'Change File' : 'Upload File'}
                    </Button>
                  </div>
                ))}
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base mt-6"
                  onClick={handleSubmitForReview}
                  disabled={documentsToUpload.some(doc => !doc.uploaded)} // Disable if any document is not uploaded
                >
                  Submit for Review
                </Button>
              </div>
            )}

            <p className="mt-8 text-center text-sm text-gray-600">
              For any issues or questions regarding your verification, please contact support.
            </p>
            <div className="text-center">
              <Button variant="link" onClick={() => navigate('/seller/support')}>Contact Support</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerKycStatusPage;
