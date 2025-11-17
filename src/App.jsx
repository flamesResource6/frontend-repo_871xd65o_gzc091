import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NotepadApp from './components/NotepadApp'
import { Footer, Privacy, Terms } from './components/Legal'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  )
}

export default function AppRoutes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<NotepadApp />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  )
}
