import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Register() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          fullname: {
            firstname: formData.firstName,
            lastname: formData.lastName,
          },
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        setErrorMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again later.');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Create an Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          {/* Full Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-neutral-900 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}