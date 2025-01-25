import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function UploadComic() {
  const [formData, setFormData] = useState({
    title: '',
    coverImage: null as File | null,
    genre: '',
    description: '',
    pages: [] as File[],
  });

  const handlePageChange = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData({
        ...formData,
        pages: [...formData.pages, ...fileArray],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement upload logic
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Upload Comic</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="coverImage" className="mb-2 block text-sm font-medium">
              Cover Image
            </label>
            <Input
              id="coverImage"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormData({ ...formData, coverImage: file });
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="genre" className="mb-2 block text-sm font-medium">
              Genre
            </label>
            <select
              id="genre"
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-neutral-950"
              required
            >
              <option value="">Select a genre</option>
              <option value="adventure">Adventure</option>
              <option value="fantasy">Fantasy</option>
              <option value="scifi">Sci-Fi</option>
              <option value="romance">Romance</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="pages" className="mb-2 block text-sm font-medium">
              Comic Pages
            </label>
            <Input
              id="pages"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handlePageChange(e.target.files)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Upload Comic
          </Button>
        </form>
      </div>
    </div>
  );
}