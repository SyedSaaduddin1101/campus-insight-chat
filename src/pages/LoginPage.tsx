
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // For demo purposes, simulate login success
    toast({
      title: "Login Successful",
      description: "Welcome back to CampusInsight!",
    });
    
    // Redirect to home page after login
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4 animate-fadeIn">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">
              Sign in to continue your campus placement journey
            </p>
          </div>
          
          <div className="animate-scaleIn">
            <AuthForm type="login" onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
