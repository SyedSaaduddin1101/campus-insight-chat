
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
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
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms of Service</h1>
            
            <div className="prose max-w-none text-gray-700 space-y-6">
              <p>
                Last updated: May 08, 2025
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the CampusInsight website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">2. User Registration</h2>
              <p>
                To access certain features of CampusInsight, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">3. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the service for any unlawful purpose or to violate any laws</li>
                <li>Post false, inaccurate, misleading, defamatory, or libelous content</li>
                <li>Impersonate any person or entity</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Use the service to transmit viruses or other harmful code</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">4. Content Guidelines</h2>
              <p>
                When posting reviews, comments, or other content, you agree that such content:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Is based on your actual experience</li>
                <li>Does not contain confidential information</li>
                <li>Does not infringe on any third party's rights</li>
                <li>Is not defamatory, offensive, harmful, or inappropriate</li>
                <li>Does not contain personal attacks or hate speech</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">5. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by CampusInsight and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">6. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">7. Disclaimer</h2>
              <p>
                The service is provided on an "AS IS" and "AS AVAILABLE" basis. CampusInsight makes no warranties, whether express or implied, regarding the service's reliability, accuracy, or availability.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">8. Limitation of Liability</h2>
              <p>
                In no event shall CampusInsight, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential or punitive damages arising out of or relating to your use of the service.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 text-gray-900">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>Email: terms@campusinsight.com</p>
              <p>Phone: +91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
