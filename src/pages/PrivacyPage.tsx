
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4 animate-fadeIn">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
            
            <div className="prose max-w-none text-gray-700 space-y-6">
              <p>
                Last updated: May 08, 2025
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">1. Introduction</h2>
              <p>
                CampusInsight ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Create an account</li>
                <li>Update your profile</li>
                <li>Post reviews or comments</li>
                <li>Participate in chats</li>
                <li>Contact our support team</li>
              </ul>
              
              <p>This information may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and password</li>
                <li>Educational background and employment history</li>
                <li>Profile pictures</li>
                <li>Content of reviews, messages, and comments</li>
                <li>Usage data and device information</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative messages and updates</li>
                <li>Respond to comments and questions</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against and prevent fraud and abuse</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">4. Sharing of Information</h2>
              <p>
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>With your consent</li>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the rights of others</li>
                <li>In connection with a business transaction such as a merger or acquisition</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">5. Your Choices</h2>
              <p>
                You can update your account information at any time. You may also delete your account, though we may retain certain information as required by law or for legitimate business purposes.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">6. Security</h2>
              <p>
                We take reasonable measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>Email: privacy@campusinsight.com</p>
              <p>Phone: +91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
