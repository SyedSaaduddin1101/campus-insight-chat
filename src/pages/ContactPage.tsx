
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Demo submission handler
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 animate-fadeIn">Contact Us</h1>
            <p className="text-gray-600 text-center mb-10 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              Have questions or suggestions? We'd love to hear from you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1 space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <Card className="shadow-md">
                  <CardContent className="p-6 flex flex-col items-center md:items-start">
                    <div className="mb-4 p-3 rounded-full bg-brand-100">
                      <MapPin className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Our Address</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      123 Tech Park, Hitech City<br />
                      Hyderabad, Telangana 500081<br />
                      India
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md">
                  <CardContent className="p-6 flex flex-col items-center md:items-start">
                    <div className="mb-4 p-3 rounded-full bg-brand-100">
                      <Phone className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md">
                  <CardContent className="p-6 flex flex-col items-center md:items-start">
                    <div className="mb-4 p-3 rounded-full bg-brand-100">
                      <Mail className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">info@campusinsight.com</p>
                    <p className="text-gray-600">support@campusinsight.com</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message here..."
                          rows={6}
                          required
                          className="w-full resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-brand-600 hover:bg-brand-700 transition-transform duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
