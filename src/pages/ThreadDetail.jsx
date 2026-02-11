import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const DEMO_THREADS = [
  { id: 1, title: 'Best time to visit Terelj?', author: 'Bat-Erdene', content: 'Planning a trip to Terelj National Park. When is the best season to visit? I want good weather for hiking and horseback riding.', created_at: '2026-02-10' },
  { id: 2, title: 'Gobi Desert hotel recommendations', author: 'Sarnai', content: 'Looking for affordable hotels near Khongoryn Els sand dunes. Any suggestions?', created_at: '2026-02-09' },
  { id: 3, title: 'Ulaanbaatar city center hotels', author: 'Enkhjin', content: 'Any recommendations for hotels walking distance from Sukhbaatar Square? Budget is around $100/night.', created_at: '2026-02-08' },
]

const DEMO_REPLIES = {
  1: [
    { id: 1, author: 'Sarnai', content: 'June to August is the best time! The weather is warm and green.', created_at: '2026-02-10' },
    { id: 2, author: 'Enkhjin', content: 'I went in September and it was beautiful with fall colors. Slightly cold though.', created_at: '2026-02-10' },
  ],
  2: [
    { id: 3, author: 'Bat-Erdene', content: 'Gobi Lodge is great! I stayed there last summer.', created_at: '2026-02-09' },
  ],
  3: [
    { id: 4, author: 'Sarnai', content: 'Blue Sky Hotel is right there and very nice.', created_at: '2026-02-08' },
    { id: 5, author: 'Bat-Erdene', content: 'Check out the new hotels on Seoul Street too!', created_at: '2026-02-08' },
  ],
}

export default function ThreadDetail() {
  const { id } = useParams()
  const [thread, setThread] = useState(null)
  const [replies, setReplies] = useState([])
  const [newReply, setNewReply] = useState({ author: '', content: '' })

  useEffect(() => {
    async function fetchThread() {
      const { data } = await supabase.from('threads').select('*').eq('id', id).single()
      if (data) {
        setThread(data)
      } else {
        setThread(DEMO_THREADS.find((t) => t.id === Number(id)) || null)
      }
    }

    async function fetchReplies() {
      const { data } = await supabase.from('replies').select('*').eq('thread_id', id).order('created_at', { ascending: true })
      if (data && data.length > 0) {
        setReplies(data)
      } else {
        setReplies(DEMO_REPLIES[Number(id)] || [])
      }
    }

    fetchThread()
    fetchReplies()
  }, [id])

  const handleReply = async (e) => {
    e.preventDefault()
    const reply = { ...newReply, thread_id: Number(id), created_at: new Date().toISOString().split('T')[0] }

    const { data } = await supabase.from('replies').insert(reply).select().single()

    if (data) {
      setReplies([...replies, data])
    } else {
      setReplies([...replies, { ...reply, id: Date.now() }])
    }

    setNewReply({ author: '', content: '' })
  }

  if (!thread) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>
  }

  return (
    <div>
      <Link to="/threads" className="text-indigo-600 hover:text-indigo-800 text-sm mb-4 inline-block">&larr; Back to Threads</Link>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h1 className="text-xl font-bold text-gray-900 mb-2">{thread.title}</h1>
        <p className="text-gray-600 mb-3">{thread.content}</p>
        <p className="text-xs text-gray-400">by {thread.author} &middot; {thread.created_at}</p>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-4">Replies ({replies.length})</h2>

      <div className="space-y-3 mb-6">
        {replies.map((reply) => (
          <div key={reply.id} className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-gray-700 text-sm mb-2">{reply.content}</p>
            <p className="text-xs text-gray-400">by {reply.author} &middot; {reply.created_at}</p>
          </div>
        ))}
        {replies.length === 0 && (
          <p className="text-gray-400 text-sm">No replies yet. Be the first to reply!</p>
        )}
      </div>

      <form onSubmit={handleReply} className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Write a Reply</h3>
        <div className="space-y-3">
          <input
            required
            type="text"
            placeholder="Your name"
            value={newReply.author}
            onChange={(e) => setNewReply({ ...newReply, author: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
          />
          <textarea
            required
            rows={3}
            placeholder="Write your reply..."
            value={newReply.content}
            onChange={(e) => setNewReply({ ...newReply, content: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm resize-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Post Reply
          </button>
        </div>
      </form>
    </div>
  )
}
