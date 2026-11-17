import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [['About', '#about'], ['Work', '#work'], ['Skills', '#skills'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_8px_35px_rgba(20,30,16,.06)] backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-extrabold text-lime">H.</span>
          <span className="text-sm font-extrabold tracking-tight">harish<span className="text-muted">.dev</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold text-white transition hover:bg-[#343a31] md:flex">
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button aria-label="Toggle menu" className="grid h-10 w-10 place-items-center rounded-xl border border-line md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {open && <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-line bg-white p-3 shadow-soft md:hidden">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold hover:bg-paper">{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white">Let’s talk <ArrowUpRight size={16} /></a>
      </div>}
    </header>
  )
}
