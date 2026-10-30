import {Link} from 'react-router-dom'
function Nav () {
    return (
        <>
        
         {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f6ef] border-b border-[#e9e3d8] shadow-sm">
    <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

      {/* LOGO */}
      <Link to="/" className="text-2xl font-serif tracking-tight text-[#4b3a2d]">
        ORURU TEGIRI CLOTHING SERVICE
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-10 text-xs tracking-[3px] text-[#655d50]">
        <Link to="/" className="hover:text-[#a45b3c] transition">HOME</Link>
        <Link to="/shop" className="hover:text-[#a45b3c] transition">SHOP</Link>

        <a
          href="https://wa.me/2349119361695"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-green-700 transition"
        >
          <span className="text-green-700 text-lg">◉</span>
          Chat
        </a>
      </div>

      {/* MOBILE CHAT */}
      <a
        href="https://wa.me/2349119361695"
        className="md:hidden text-sm text-green-700"
      >
        WhatsApp
      </a>

    </div>
    </nav>
        </>
    )
}

export default Nav 