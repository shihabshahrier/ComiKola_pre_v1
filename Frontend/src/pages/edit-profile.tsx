import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Comic enthusiast and digital artist',
    profileImage: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, profileImage: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement update profile logic
    console.log('Updated Profile:', formData);
  };

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
      <div className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Edit Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover"
            />
            <Input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium">
              Username
            </label>
            <Input
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="bio" className="mb-2 block text-sm font-medium">
              Bio
            </label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <Link to="/profile">
              <Button variant="ghost">Cancel</Button>
            </Link>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}