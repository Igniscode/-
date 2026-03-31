import { useState } from 'react';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { BaguaSection } from './sections/BaguaSection';
import { FiveElementsSection } from './sections/FiveElementsSection';
import { HomeSection } from './sections/HomeSection';
import { YinYangSection } from './sections/YinYangSection';
import type { ElementKey, TabId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [yyMode, setYyMode] = useState<'wave' | 'particle'>('wave');
  const [selectedFive, setSelectedFive] = useState<ElementKey | null>(null);
  const [bits, setBits] = useState<number[]>([1, 1, 1]);

  const toggleBit = (index: number) => {
    setBits((current) => current.map((bit, bitIndex) => (bitIndex === index ? (bit === 1 ? 0 : 1) : bit)));
  };

  return (
    <>
      <Navigation activeTab={activeTab} onChange={setActiveTab} />

      <main className="mx-auto max-w-6xl px-6 py-12">
        {activeTab === 'home' && <HomeSection />}
        <YinYangSection active={activeTab === 'yy'} mode={yyMode} onModeChange={setYyMode} />
        <FiveElementsSection active={activeTab === 'five'} selected={selectedFive} onSelect={setSelectedFive} />
        <BaguaSection active={activeTab === 'bagua'} bits={bits} onToggleBit={toggleBit} />
      </main>

      <Footer />
    </>
  );
}