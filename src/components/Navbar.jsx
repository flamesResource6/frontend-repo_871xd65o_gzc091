import { Link, useLocation } from 'react-router-dom'
import { NotebookPen, Shield, FileText, Sparkles } from 'lucide-react'

export default function Navbar() {
  const { pathname } = useLocation()
  const link = (to, label) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        pathname === to
          ? 'text-slate-900 bg-white/70'
          : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="backdrop-blur-xl bg-white/50 border border-white/40 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
                <NotebookPen size={18} />
              </div>
              <span className="text-slate-800 font-semibold">Checkbox Notepad</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {link('/', 'Home')}
              {link('/app', 'Notepad')}
              <Link to="/privacy" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md inline-flex items-center gap-2">
                <Shield size={16} /> Privacy
              </Link>
              <Link to="/terms" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md inline-flex items-center gap-2">
                <FileText size={16} /> Terms
              </Link>
              <a href="#ai" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md inline-flex items-center gap-2">
                <Sparkles size={16} /> AI
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
