import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HotelDetail from './pages/HotelDetail'
import Threads from './pages/Threads'
import ThreadDetail from './pages/ThreadDetail'
import MyBookings from './pages/MyBookings'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/threads" element={<Threads />} />
          <Route path="/thread/:id" element={<ThreadDetail />} />
          <Route path="/bookings" element={<MyBookings />} />
        </Routes>
      </main>
    </div>
  )
}
