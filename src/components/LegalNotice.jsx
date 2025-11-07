import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section id="legal" className="mt-12 md:mt-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-full bg-emerald-50 p-2 ring-1 ring-emerald-200">
            <ShieldCheck className="h-5 w-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Legal & DMCA</h2>
            <div className="mt-3 space-y-2 text-slate-700 text-sm leading-relaxed">
              <p>We do not host or store video content. All streams are loaded directly from third-party websites. AniHub indexes metadata and links for convenience only.</p>
              <p>
                For takedown requests, submit the DMCA form at
                {' '}
                <a href="#" className="inline-flex items-center gap-1 text-slate-900 font-semibold underline decoration-slate-300 hover:decoration-slate-700">
                  /legal/dmca <ExternalLink className="h-4 w-4" />
                </a>.
                We will review and remove reported links and purge caches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
