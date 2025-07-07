import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="bg-dark-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      {/* Contact section placeholder */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neon-purple mb-4">Contact Section</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
