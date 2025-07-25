import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function for static links

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-4"> {/* Adjust min-h to account for Navbar height */}
      <Card className="w-full max-w-md rounded-xl shadow-lg">
        <CardHeader className="text-center pb-6">
          {/* Using a placeholder for the logo. You can replace with your actual logo. */}
          <div className="flex justify-center mb-4">
            <span className="text-blue-600 font-bold text-4xl">ZeeroStock</span>
            {/* <img src="/path/to/your/logo.svg" alt="ZeeroStock Logo" className="h-16 w-auto" /> */}
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to your B2B marketplace account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Static form structure - no state or event handlers */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-md"
              />
              {/* Using onClick for navigation, as it's a static link */}
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline float-right" onClick={() => navigate('/forgot-password')}>
                Forgot password?
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember-me"
                // No checked or onCheckedChange props as it's static
                className="rounded"
              />
              <Label htmlFor="remember-me" className="text-sm">Remember me</Label>
            </div>
            {/* Type "button" to prevent default form submission in static mode */}
            <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base">
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Sign-On Buttons */}
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="w-full rounded-md py-2 text-base border-gray-300 text-gray-700 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/353782/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </Button>
            <Button variant="outline" className="w-full rounded-md py-2 text-base border-gray-300 text-gray-700 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/448208/microsoft.svg" alt="Microsoft" className="h-5 w-5 mr-2" />
              Microsoft
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline" onClick={() => navigate('/register')}>
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
