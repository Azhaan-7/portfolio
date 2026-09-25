function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-100"
        >
          Azhaan.
        </a>

        <div className="flex gap-6 text-sm text-slate-300">
          <a className="transition hover:text-cyan-400" href="#about">
            About
          </a>

          <a className="transition hover:text-cyan-400" href="#projects">
            Projects
          </a>

          <a className="transition hover:text-cyan-400" href="#skills">
            Skills
          </a>

          <a className="transition hover:text-cyan-400" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar