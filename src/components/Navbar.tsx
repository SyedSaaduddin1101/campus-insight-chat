
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-600 to-teal-600 flex items-center justify-center">
              <MessageSquare size={18} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl text-gray-800">CampusInsight</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium">Home</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-brand-600 font-medium">Reviews</Link>
            <Link to="/chat" className="text-gray-600 hover:text-brand-600 font-medium">Chat</Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-600 font-medium">About</Link>
          </nav>
          
          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-brand-600 text-white hover:bg-brand-700">
                Sign up
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/reviews" className="text-gray-600 hover:text-brand-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </Link>
              <Link to="/chat" className="text-gray-600 hover:text-brand-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Chat
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-brand-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-brand-500 text-brand-600">
                    Log in
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-600 text-white hover:bg-brand-700">
                    Sign up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
