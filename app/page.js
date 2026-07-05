import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Agenda from '@/components/Agenda';
import Speakers from '@/components/Speakers';
import Sponsors from '@/components/Sponsors';
import LocationSection from '@/components/LocationSection';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Agenda />
        <Speakers />
        <Sponsors />
        <LocationSection />
        <Register />
      </main>
      <Footer />
    </>
  );
}
