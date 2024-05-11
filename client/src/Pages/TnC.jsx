import React from 'react';

const TnC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-10 flex justify-center items-center">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6">Our Policies</h1>
        {/* Privacy Policy */}
        <div className="bg-white bg-opacity-10 p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Privacy Policy</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Personal information collected includes name, contact details, and transaction history.</li>
            <li>Use of information: To process transactions, communicate with customers, and improve services.</li>
            <li>Information sharing: Only with third parties for service provision, legal requirements, or with customer consent.</li>
            <li>Data security measures in place to protect against unauthorized access.</li>
            <li>Customers have the right to access, correct, or delete their personal data.</li>
          </ul>
        </div>
        {/* Refund Policy */}
        <div className="bg-white bg-opacity-10 p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Refund Policy</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Refunds for failed transactions will be processed automatically to the original payment method within 5-7 business days.</li>
            <li>In case of disputes, customers must provide documentation to support their claim within a specified timeframe of 48 hours.</li>
            <li>All transactions are final, no refund will be issued for sold passes.</li>
          </ul>
        </div>
        {/* Terms and Conditions */}
        <div className="bg-white bg-opacity-10 p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Terms and Conditions</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Users agree to provide accurate and complete transaction information.</li>
            <li>The service provider is not liable for losses caused by incorrect information provided by the user.</li>
            <li>Disputes must be reported within a specific period from the transaction date for eligibility for review.</li>
            <li>The provider reserves the right to modify terms, with changes effective upon posting on the website.</li>
            <li>By using the service, users consent to the collection and use of personal information as outlined in the Privacy Policy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TnC;
