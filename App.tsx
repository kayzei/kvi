import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Solutions from './components/Solutions';
import UseCases from './components/UseCases';
import WhyChooseUs from './components/WhyChooseUs';
import Partnership from './components/Partnership';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Solutions />
        <UseCases />
        <WhyChooseUs />
        <Partnership />
        <ContactCTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;