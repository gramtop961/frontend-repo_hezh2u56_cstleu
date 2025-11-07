import { Globe, Database, Eye, Link as LinkIcon } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'AniList-powered',
    desc: 'Rich, reliable metadata fetched live from AniList to keep titles and details current.',
  },
  {
    icon: LinkIcon,
    title: 'External sources only',
    desc: 'Episode links from GogoAnime and HiAnime are opened directly in a WebView.',
  },
  {
    icon: Eye,
    title: 'No hosting',
    desc: 'AniHub never stores or serves videos. It only indexes public episode pages.',
  },
  {
    icon: Database,
    title: 'MVP-ready backend',
    desc: 'FastAPI service with scraping and DMCA endpoints to keep operations compliant.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mt-12 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <Icon className="h-6 w-6 text-slate-900" />
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
