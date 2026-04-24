import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalStory from './components/PersonalStory';
import RealEstate from './components/RealEstate';
import Teaching from './components/Teaching';
import Ventures from './components/Ventures';
import Publications from './components/Publications';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[#F5F1E8]">
      <Navbar />
      <Hero />
      <About />
      <RealEstate />
      <Teaching />
      <Ventures />
      <Publications />
      <Media />
      <PersonalStory />
      <Contact />
      <Footer />
    </main>
  );
}
