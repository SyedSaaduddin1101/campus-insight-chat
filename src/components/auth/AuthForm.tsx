
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const isLogin = type === 'login';
  
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {isLogin ? 'Welcome back' : 'Create your account'}
        </CardTitle>
        <CardDescription className="text-center">
          {isLogin 
            ? 'Enter your credentials to access your account' 
            : 'Fill in the form below to create your account'}
        </CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last Name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="college">College</Label>
                <Input id="college" placeholder="Your College" required />
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {isLogin && (
                <Link to="/forgot-password" className="text-xs text-brand-600 hover:underline">
                  Forgot password?
                </Link>
              )}
            </div>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" required />
            </div>
          )}
          
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button 
            type="submit" 
            className="w-full bg-brand-600 hover:bg-brand-700 text-white"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
          
          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <Link to="/register" className="text-brand-600 hover:underline font-medium">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="text-brand-600 hover:underline font-medium">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

export default AuthForm;
