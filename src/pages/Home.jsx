import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { query } from '../lib/supabase'

const DEMO_HOTELS = [
  { id: 1, name: 'Blue Sky Hotel', location: 'Ulaanbaatar', price: 120, rating: 4.5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', description: 'Modern hotel in the heart of the city' },
  { id: 2, name: 'Gobi Lodge', location: 'Dalanzadgad', price: 85, rating: 4.2, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop', description: 'Experience the beauty of the Gobi desert' },
  { id: 3, name: 'Terelj Resort', location: 'Terelj', price: 150, rating: 4.8, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop', description: 'Luxury resort surrounded by nature' },
  { id: 4, name: 'Khuvsgul Lake Hotel', location: 'Khatgal', price: 95, rating: 4.3, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop', description: 'Peaceful stay by the pristine lake' },
  { id: 5, name: 'Steppe Inn', location: 'Kharkhorin', price: 70, rating: 4.0, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop', description: 'Affordable comfort near ancient ruins' },
  { id: 6, name: 'Eagle Nest Hotel', location: 'Olgii', price: 110, rating: 4.6, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop', description: 'Mountain views and Kazakh hospitality' },
]

export default function Home() {
  const [hotels, setHotels] = useState(DEMO_HOTELS)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchHotels() {
      const { data } = await query((s) => s.from('hotels').select('*'))
      if (data && data.length > 0) setHotels(data)
    }
    fetchHotels()
  }, [])

  const filtered = hotels.filter(
    (h) =>
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Stay</h1>
        <p className="text-gray-500 mb-4">Browse and book hotels across Mongolia</p>
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((hotel) => (
          <Link
            key={hotel.id}
            to={`/hotel/${hotel.id}`}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">{hotel.name}</h3>
                <span className="text-sm bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                  {hotel.rating}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">{hotel.location}</p>
              <p className="text-sm text-gray-600 mb-3">{hotel.description}</p>
              <p className="text-lg font-bold text-indigo-600">${hotel.price}<span className="text-sm font-normal text-gray-400">/night</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
