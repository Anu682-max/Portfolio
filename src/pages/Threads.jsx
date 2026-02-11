import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const DEMO_THREADS = [
  { id: 1, title: 'Best time to visit Terelj?', author: 'Bat-Erdene', content: 'Planning a trip to Terelj National Park. When is the best season?', replies_count: 5, created_at: '2026-02-10' },
  { id: 2, title: 'Gobi Desert hotel recommendations', author: 'Sarnai', content: 'Looking for affordable hotels near Khongoryn Els sand dunes.', replies_count: 3, created_at: '2026-02-09' },
  { id: 3, title: 'Ulaanbaatar city center hotels', author: 'Enkhjin', content: 'Any recommendations for hotels walking distance from Sukhbaatar Square?', replies_count: 8, created_at: '2026-02-08' },
]

export default function Threads() {
  const [threads, setThreads] = useState(DEMO_THREADS)
  const [showForm, setShowForm] = useState(false)
  const [newThread, setNewThread] = useState({ title: '', author: '', content: '' })

  useEffect(() => {
    async function fetchThreads() {
      const { data } = await supabase.from('threads').select('*').order('created_at', { ascending: false })
      if (data && data.length > 0) setThreads(data)
    }
    fetchThreads()
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    const thread = { ...newThread, replies_count: 0, created_at: new Date().toISOString().split('T')[0] }

    const { data, error } = await supabase.from('threads').insert(thread).select().single()

    if (data) {
      setThreads([data, ...threads])
    } else {
      // Demo mode
      const demoThread = { ...thread, id: Date.now() }
      setThreads([demoThread, ...threads])
    }

    setNewThread({ title: '', author: '', content: '' })
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Threads</h1>
          <p className="text-gray-500 text-sm">Discuss hotels, travel tips, and more</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          {showForm ? 'Cancel' : '+ New Thread'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Create New Thread</h2>
          <div className="space-y-3">
            <input
              required
              type="text"
              placeholder="Your name"
              value={newThread.author}
              onChange={(e) => setNewThread({ ...newThread, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
            />
            <input
              required
              type="text"
              placeholder="Thread title"
              value={newThread.title}
              onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
            />
            <textarea
              required
              rows={3}
              placeholder="What's on your mind?"
              value={newThread.content}
              onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm resize-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Post Thread
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {threads.map((thread) => (
          <Link
            key={thread.id}
            to={`/thread/${thread.id}`}
            className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{thread.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{thread.content}</p>
                <p className="text-xs text-gray-400 mt-2">by {thread.author} &middot; {thread.created_at}</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full whitespace-nowrap ml-4">
                {thread.replies_count} replies
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
