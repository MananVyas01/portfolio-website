import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-dark-primary">
      <Navbar />
      <Hero />
      
      {/* Placeholder sections for future development */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neon-blue mb-4">About Section</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neon-green mb-4">Projects Section</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neon-purple mb-4">Contact Section</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
