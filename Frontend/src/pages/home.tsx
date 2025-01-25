import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Home() {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const featuredComics = [
    {
      id: '1',
      title: 'The Adventure Begins',
      coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&q=80&w=400',
      author: 'Sarah Johnson',
    },
    {
      id: '2',
      title: 'Mystic Dreams',
      coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400',
      author: 'Mike Chen',
    },
    {
      id: '3',
      title: 'Urban Tales',
      coverImage: 'https://images.unsplash.com/photo-1623945194105-cd36c4433390?auto=format&fit=crop&q=80&w=400',
      author: 'Alex Rivera',
    },
  ];

  return (
    <div>
      <section className="mb-16 rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800 px-4 py-12 text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
            Share Your Stories with the World
          </h1>
          <p className="mb-8 text-base sm:text-lg text-neutral-300">
            Join our community of comic creators and readers. Upload your comics,
            discover new stories, and connect with fellow enthusiasts.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            {!isLoggedIn && (
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-white border-white text-neutral-900 hover:bg-amber-300">
                  Get Started
                </Button>
              </Link>
            )}
            <Link to="/comics">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-neutral-900 hover:bg-amber-300">
                Browse Comics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16 px-4 sm:px-8">
        <div className="mb-8 flex flex-col items-start justify-between sm:flex-row">
          <h2 className="text-2xl font-bold">Featured Comics</h2>
          <Link to="/comics">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {featuredComics.map((comic) => (
            <SwiperSlide key={comic.id}>
              <Link
                to={`/comics/${comic.id}`}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={comic.coverImage}
                    alt={comic.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold">{comic.title}</h3>
                  <p className="text-sm text-neutral-600">by {comic.author}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="rounded-lg border bg-white p-6 sm:p-8 shadow-sm mx-4 sm:mx-8 lg:mx-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 mx-auto">
              <svg
                className="h-6 w-6 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold">Easy Upload</h3>
            <p className="text-sm text-neutral-600">
              Share your comics with our community in just a few clicks
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 mx-auto">
              <svg
                className="h-6 w-6 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold">Get Feedback</h3>
            <p className="text-sm text-neutral-600">
              Receive likes, comments, and ratings from readers
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 mx-auto">
              <svg
                className="h-6 w-6 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold">Join the Community</h3>
            <p className="text-sm text-neutral-600">
              Connect with other creators and build your audience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}