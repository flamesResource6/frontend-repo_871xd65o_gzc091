import { useEffect, useMemo, useRef, useState } from 'react'
import { Plus, Tag, Sparkles, Trash2, Pin, PinOff } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function NotepadApp() {
  const [notes, setNotes] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [creating, setCreating] = useState(false)
  const [busy, setBusy] = useState(false)
  const textRef = useRef(null)

  const filtered = useMemo(() => {
    let list = [...notes]
    if (activeCategory !== 'all') {
      list = list.filter(n => n.category_id === activeCategory)
    }
    return list.sort((a,b) => Number(b.pinned) - Number(a.pinned))
  }, [notes, activeCategory])

  useEffect(() => {
    refresh()
  }, [])

  const refresh = async () => {
    const [ns, cs] = await Promise.all([
      fetch(`${API}/api/notes`).then(r => r.json()),
      fetch(`${API}/api/categories`).then(r => r.json()),
    ])
    setNotes(ns)
    setCategories(cs)
  }

  const createCategory = async () => {
    const name = prompt('Category name')
    if (!name) return
    const res = await fetch(`${API}/api/categories`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    const cat = await res.json()
    setCategories([cat, ...categories])
  }

  const createNote = async () => {
    setCreating(true)
    const res = await fetch(`${API}/api/notes`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Untitled', content: '' })
    })
    const note = await res.json()
    setNotes([note, ...notes])
    setCreating(false)
    setTimeout(() => {
      document.getElementById(`note-${note.id}`)?.focus()
    }, 0)
  }

  const updateNote = async (id, patch) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, ...patch } : n))
    await fetch(`${API}/api/notes/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch)
    })
  }

  const removeNote = async (id) => {
    setNotes(prev => prev.filter(n => n.id !== id))
    await fetch(`${API}/api/notes/${id}`, { method: 'DELETE' })
  }

  const enhance = async (id, text) => {
    if (!text?.trim()) return
    setBusy(true)
    const res = await fetch(`${API}/api/ai/enhance`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
    const data = await res.json()
    await updateNote(id, { content: data.enhanced })
    setBusy(false)
  }

  const generate = async (id, prompt) => {
    if (!prompt?.trim()) return
    setBusy(true)
    const res = await fetch(`${API}/api/ai/generate`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    })
    const data = await res.json()
    await updateNote(id, { content: (notes.find(n => n.id === id)?.content || '') + (notes.find(n => n.id === id)?.content ? '\n\n' : '') + data.text })
    setBusy(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-6">
          <aside className="hidden md:block w-64 shrink-0">
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800">Categories</h3>
                <button onClick={createCategory} className="text-xs px-2 py-1 rounded-lg bg-white/70 border border-white/60 hover:bg-white">New</button>
              </div>
              <div className="space-y-1">
                <button onClick={() => setActiveCategory('all')} className={`w-full text-left px-3 py-2 rounded-lg transition ${activeCategory==='all'?'bg-white text-slate-900':'hover:bg-white/60 text-slate-700'}`}>All</button>
                {categories.map(c => (
                  <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`w-full text-left px-3 py-2 rounded-lg inline-flex items-center gap-2 transition ${activeCategory===c.id?'bg-white text-slate-900':'hover:bg-white/60 text-slate-700'}`}>
                    <Tag size={14} /> {c.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={createNote} disabled={creating} className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl shadow hover:shadow-md disabled:opacity-50">
                <Plus size={16} /> New Note
              </button>
              {busy && <span className="text-sm text-slate-600">AI working…</span>}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(n => (
                <div key={n.id} className="group backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between">
                    <input
                      value={n.title}
                      onChange={e => updateNote(n.id, { title: e.target.value })}
                      className="bg-transparent outline-none text-slate-900 font-semibold"
                    />
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                      <button onClick={() => updateNote(n.id, { pinned: !n.pinned })} className="p-1 rounded-lg hover:bg-white/70" title={n.pinned? 'Unpin':'Pin'}>
                        {n.pinned ? <PinOff size={16} /> : <Pin size={16} />}
                      </button>
                      <button onClick={() => removeNote(n.id)} className="p-1 rounded-lg hover:bg-white/70 text-red-600" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <textarea
                    id={`note-${n.id}`}
                    value={n.content}
                    onChange={e => updateNote(n.id, { content: e.target.value })}
                    className="mt-2 w-full h-40 resize-none bg-transparent outline-none text-slate-700"
                    placeholder="Start typing…"
                  />
                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => enhance(n.id, n.content)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 hover:bg-white border border-white/60 text-slate-800">
                      <Sparkles size={14} /> Enhance
                    </button>
                    <button onClick={async () => {
                      const p = prompt('Describe what to generate')
                      if (p) await generate(n.id, p)
                    }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 hover:bg-white border border-white/60 text-slate-800">
                      <Sparkles size={14} /> Generate
                    </button>
                    <select
                      value={n.category_id || ''}
                      onChange={e => updateNote(n.id, { category_id: e.target.value || null })}
                      className="ml-auto bg-white/70 border border-white/60 rounded-lg px-2 py-1 text-sm"
                    >
                      <option value="">No category</option>
                      {categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
