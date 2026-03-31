import type { TabId } from '../types';

interface NavigationProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 'home', label: '연구 개요' },
  { id: 'yy', label: '음양 (양자)' },
  { id: 'five', label: '오행 (상호작용)' },
  { id: 'bagua', label: '팔괘 (팔정도)' }
];

export function Navigation({ activeTab, onChange }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tighter text-black">QUANTUM <span className="text-indigo-600">LOGOS</span></span>
        </div>
        <div className="flex h-full space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`h-full items-center border-b-2 pt-0.5 text-sm font-bold transition ${activeTab === tab.id ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-black'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}