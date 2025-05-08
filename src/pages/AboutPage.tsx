
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4 animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">About CampusInsight</h1>
            
            <div className="space-y-8">
              <Card className="shadow-md animate-scaleIn" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-brand-600">Our Mission</h2>
                  <p className="text-gray-700 mb-4">
                    CampusInsight was founded with a simple yet powerful mission: to democratize access to campus placement information and create a supportive community where students can learn from each other's experiences.
                  </p>
                  <p className="text-gray-700">
                    We believe that every student deserves equal opportunity to prepare for and succeed in campus placements, regardless of their background or college tier. By sharing real experiences, insights, and advice, we aim to level the playing field and help students make informed decisions about their careers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-brand-600">What We Do</h2>
                  <p className="text-gray-700 mb-4">
                    CampusInsight provides a platform where students can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Read authentic placement reviews from peers who have been through the process</li>
                    <li>Connect one-on-one with seniors and alumni who have successfully navigated placements</li>
                    <li>Access detailed information about company recruitment processes at different colleges</li>
                    <li>Share their own experiences to help juniors and peers</li>
                    <li>Build a professional network that extends beyond their immediate college circle</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-md animate-scaleIn" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-brand-600">Our Team</h2>
                  <p className="text-gray-700 mb-4">
                    CampusInsight was founded by a group of recent graduates who experienced firsthand the challenges and uncertainties of campus placements. Our team consists of passionate individuals from various colleges across Telangana who are committed to making the placement journey smoother for students.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                          alt="Founder" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Ananya Sharma</h3>
                        <p className="text-gray-600">Co-founder & CEO</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                          alt="Founder" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Rohit Patel</h3>
                        <p className="text-gray-600">Co-founder & CTO</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-brand-600">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    We're always looking to improve our platform and would love to hear from you! If you have any questions, suggestions, or feedback, please feel free to reach out to us.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>Email: info@campusinsight.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: 123 Tech Park, Hyderabad, Telangana - 500081</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
