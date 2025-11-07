import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import LegalNotice from './components/LegalNotice.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6 md:py-10 space-y-8 md:space-y-12">
        <HeroSection />
        <FeatureGrid />
        <LegalNotice />
        <footer className="pt-6 text-sm text-slate-500">
          <p>
            We do not host or store video content. All streams are loaded directly from third-party websites. DMCA takedown form available at /legal/dmca.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
