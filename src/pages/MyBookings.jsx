import { useEffect, useState } from 'react'
import { query } from '../lib/supabase'

export default function MyBookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    async function fetchBookings() {
      const { data } = await query((s) => s.from('bookings').select('*').order('created_at', { ascending: false }))
      if (data) setBookings(data)
    }
    fetchBookings()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 mb-2">No bookings yet</p>
          <p className="text-sm text-gray-400">Book a hotel to see your reservations here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{b.hotel_name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{b.guest_name} &middot; {b.email}</p>
                  <p className="text-sm text-gray-500">{b.check_in} &rarr; {b.check_out} &middot; {b.guests} guest(s)</p>
                </div>
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">Confirmed</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
