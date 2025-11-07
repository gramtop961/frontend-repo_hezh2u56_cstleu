import Spline from '@splinetool/react-spline';
import { Rocket, Search, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient vignette to ensure text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative h-full flex items-end md:items-center">
        <div className="w-full px-6 md:px-10 lg:px-16 pb-6 md:pb-0">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
              <Shield className="h-3.5 w-3.5 text-emerald-600" />
              We do not host or store video content
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              AniHub — Your fast, legal-friendly anime indexer
            </h1>
            <p className="mt-3 md:mt-4 text-slate-700 md:text-lg">
              Browse trending shows, search metadata from AniList, and open episode pages from public sources in a built-in WebView. Simple, speedy, no accounts.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Rocket className="h-4 w-4" />
                Explore Features
              </a>
              <a
                href="#legal"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/90 text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-white"
              >
                <Search className="h-4 w-4" />
                Read Legal Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
