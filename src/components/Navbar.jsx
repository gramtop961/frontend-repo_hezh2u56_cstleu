import { Home, Search, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-slate-900 font-extrabold tracking-tight text-lg">AniHub</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#" className="inline-flex items-center gap-2 hover:text-slate-900"><Home className="h-4 w-4"/>Home</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#legal" className="inline-flex items-center gap-2 hover:text-slate-900"><Settings className="h-4 w-4"/>Legal</a>
        </nav>
        <form className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search anime..."
              className="w-44 md:w-64 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
