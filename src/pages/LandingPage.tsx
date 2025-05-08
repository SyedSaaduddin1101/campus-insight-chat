
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MessageSquare, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LandingPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24 animate-fadeIn">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slideIn">
                Campus Placement <br />
                <span className="text-teal-200">Experience Sharing</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg animate-slideIn" style={{ animationDelay: '0.2s' }}>
                Learn from real experiences shared by students about their campus placement journeys. Connect with peers and make informed career decisions.
              </p>
              <div className="flex flex-wrap gap-4 animate-slideIn" style={{ animationDelay: '0.3s' }}>
                <Link to="/register">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100 btn-hover-effect">
                    Join Now
                  </Button>
                </Link>
                <Link to="/reviews">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 btn-hover-effect">
                    Browse Reviews
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-scaleIn">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                alt="Students collaborating" 
                className="rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join CampusInsight?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform helps students prepare for campus placements by connecting them with peers who've been through the process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-t-4 border-t-brand-500 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Users size={24} className="text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Peer Experiences</h3>
                <p className="text-gray-600">
                  Access real stories and insights from students who've successfully navigated the placement process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-t-4 border-t-teal-500 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <MessageSquare size={24} className="text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">1-on-1 Chat</h3>
                <p className="text-gray-600">
                  Connect directly with alumni and seniors for personalized guidance and advice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-t-4 border-t-brand-500 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Star size={24} className="text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">College Reviews</h3>
                <p className="text-gray-600">
                  Explore detailed reviews about campus placement processes at colleges across Telangana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who found value in our platform during their placement journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6">
                  "The interview tips I got from seniors on CampusInsight were invaluable. I landed a job at Google with a package of 25 LPA!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                         alt="Rahul Sharma" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-gray-500">JNTU Hyderabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6">
                  "I was able to prepare specifically for Amazon's interview process thanks to detailed reviews from students who got placed there last year."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                         alt="Priya Reddy" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Reddy</h4>
                    <p className="text-sm text-gray-500">CBIT Hyderabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6">
                  "The 1-on-1 chat feature helped me connect with a Microsoft employee who guided me through their interview process step by step."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                         alt="Karthik Kumar" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Karthik Kumar</h4>
                    <p className="text-sm text-gray-500">IIIT Hyderabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 text-white py-16 animate-fadeIn">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to kickstart your career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already leveraging peer experiences for better interview preparation.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
