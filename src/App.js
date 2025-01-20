import logo from './logo.svg';
import './App.css';
import { Section1 } from './components/section-1/section-1';
import { SocialSection } from './components/social-proof-section/social-proof-section';

import { FeaturedSection } from './components/feature-section/feature-section';
import { TestimonialSection } from './components/testimonial-section/testimonial-section';
import { HeroHeaderSections } from './components/hero-header-section/hero-header-section';


function App() {
  return (

    <>
      <HeroHeaderSections />
      <Section1 />
      <SocialSection />
      <FeaturedSection />
      <TestimonialSection />

    </>
  );
}

export default App;
