import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { query } from '../lib/supabase'

const DEMO_HOTELS = [
  { id: 1, name: 'Blue Sky Hotel', location: 'Ulaanbaatar', price: 120, rating: 4.5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', description: 'Modern hotel in the heart of the city with luxury amenities, rooftop restaurant, and stunning city views.' },
  { id: 2, name: 'Gobi Lodge', location: 'Dalanzadgad', price: 85, rating: 4.2, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop', description: 'Experience the beauty of the Gobi desert with guided tours and traditional hospitality.' },
  { id: 3, name: 'Terelj Resort', location: 'Terelj', price: 150, rating: 4.8, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop', description: 'Luxury resort surrounded by nature with horseback riding and hiking trails.' },
  { id: 4, name: 'Khuvsgul Lake Hotel', location: 'Khatgal', price: 95, rating: 4.3, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop', description: 'Peaceful stay by the pristine lake with kayaking and fishing activities.' },
  { id: 5, name: 'Steppe Inn', location: 'Kharkhorin', price: 70, rating: 4.0, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop', description: 'Affordable comfort near ancient ruins of the Mongol Empire capital.' },
  { id: 6, name: 'Eagle Nest Hotel', location: 'Olgii', price: 110, rating: 4.6, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop', description: 'Mountain views and Kazakh hospitality with eagle hunting tours.' },
]

export default function HotelDetail() {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)
  const [booking, setBooking] = useState({ guest_name: '', email: '', check_in: '', check_out: '', guests: 1 })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchHotel() {
      const { data } = await query((s) => s.from('hotels').select('*').eq('id', id).single())
      if (data) {
        setHotel(data)
      } else {
        setHotel(DEMO_HOTELS.find((h) => h.id === Number(id)) || null)
      }
    }
    fetchHotel()
  }, [id])

  const handleBook = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await query((s) => s.from('bookings').insert({
      hotel_id: Number(id),
      hotel_name: hotel.name,
      ...booking,
    }))

    if (error) {
      // Demo mode - just show success
      console.log('Booking (demo):', { hotel_id: id, ...booking })
    }

    setSubmitted(true)
    setLoading(false)
  }

  if (!hotel) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>
  }

  return (
    <div>
      <Link to="/" className="text-indigo-600 hover:text-indigo-800 text-sm mb-4 inline-block">&larr; Back to Hotels</Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-72 md:h-96 overflow-hidden">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{hotel.name}</h1>
              <p className="text-gray-500">{hotel.location}</p>
              <span className="inline-block mt-2 text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium">
                Rating: {hotel.rating}
              </span>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-indigo-600">${hotel.price}</p>
              <p className="text-sm text-gray-400">per night</p>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{hotel.description}</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-700 font-semibold text-lg mb-1">Booking Confirmed!</p>
              <p className="text-green-600 text-sm">Thank you, {booking.guest_name}. Check your email for details.</p>
              <Link to="/bookings" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">View My Bookings</Link>
            </div>
          ) : (
            <form onSubmit={handleBook} className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Book This Hotel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={booking.guest_name}
                    onChange={(e) => setBooking({ ...booking, guest_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    required
                    type="email"
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                  <input
                    required
                    type="date"
                    value={booking.check_in}
                    onChange={(e) => setBooking({ ...booking, check_in: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                  <input
                    required
                    type="date"
                    value={booking.check_out}
                    onChange={(e) => setBooking({ ...booking, check_out: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <input
                    required
                    type="number"
                    min="1"
                    max="10"
                    value={booking.guests}
                    onChange={(e) => setBooking({ ...booking, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Booking...' : 'Confirm Booking'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
