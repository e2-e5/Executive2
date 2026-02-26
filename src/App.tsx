import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Concept } from './components/Concept';
import { Architecture } from './components/Architecture';
import { Cases } from './components/Cases';
import { Comparison } from './components/Comparison';
import { Economics } from './components/Economics';
import { ForWhom } from './components/ForWhom';
import { EasyStart } from './components/EasyStart';
import { Implementation, Final, Footer } from './components/Implementation';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-[#0a1114] selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Problem />
        <Concept />
        <Architecture />
        <Cases />
        <Comparison />
        <Economics />
        <ForWhom />
        <EasyStart />
        <Implementation />
        <Final />
      </main>
      <Footer />
    </div>
  );
}
