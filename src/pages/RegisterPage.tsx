
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // For demo purposes, simulate registration success
    toast({
      title: "Registration Successful",
      description: "Your account has been created. Welcome to CampusInsight!",
    });
    
    // Redirect to home page after registration
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600">
              Join our community and start sharing your campus placement experience
            </p>
          </div>
          
          <AuthForm type="register" onSubmit={handleSubmit} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RegisterPage;
