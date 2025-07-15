
'use client';

import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RecentProjects from './components/RecentProjects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <RecentProjects />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
