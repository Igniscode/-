import { baguaMap } from '../data/content';

interface BaguaSectionProps {
  active: boolean;
  bits: number[];
  onToggleBit: (index: number) => void;
}

function BitSwitch({ bit, onClick }: { bit: number; onClick: () => void }) {
  return (
    <div onClick={onClick} className="bit-switch flex justify-center border border-slate-200 bg-slate-50 p-6">
      {bit === 1 ? (
        <div className="h-2.5 w-full rounded-sm bg-black"></div>
      ) : (
        <div className="flex h-2.5 w-full justify-between">
          <div className="w-[44%] rounded-sm bg-black"></div>
          <div className="w-[44%] rounded-sm bg-black"></div>
        </div>
      )}
    </div>
  );
}

export function BaguaSection({ active, bits, onToggleBit }: BaguaSectionProps) {
  const key = bits.join('');
  const detail = baguaMap[key];

  return (
    <section className={active ? 'section-active' : 'section-hidden'}>
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-bold text-black">팔괘: <span className="text-indigo-600">팔정도(The Eightfold Way) 매핑</span></h3>
        <p className="mx-auto mt-2 max-w-3xl text-slate-500">3개의 비트(효)가 만들어내는 8가지의 기저 상태는 머리 겔만(Murray Gell-Mann)이 발견한<br />입자 물리학의 중입자 팔중항(Baryon Octet, SU(3) 대칭군) 구조와 기하학적으로 완벽히 일치합니다.</p>
      </div>

      <div className="grid gap-12 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-2">
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h4 className="font-bold text-black">3-Bit Quantum Matrix</h4>
            <span className="rounded-md border bg-slate-100 px-4 py-1 font-mono font-bold text-indigo-600">{bits.join(' ')}</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Upper Bit (Charge / Mass)</label>
              <BitSwitch bit={bits[0]} onClick={() => onToggleBit(0)} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Middle Bit (Strangeness / Interaction)</label>
              <BitSwitch bit={bits[1]} onClick={() => onToggleBit(1)} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Lower Bit (Isospin / Foundation)</label>
              <BitSwitch bit={bits[2]} onClick={() => onToggleBit(2)} />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-[1.5rem] p-10 text-white shadow-xl transition-colors duration-700" style={{ backgroundColor: detail.color }}>
          <div className="absolute -right-10 -top-10 font-serif text-[150px] opacity-5">{detail.sym}</div>
          <div className="relative z-10 mb-6 flex items-center space-x-6 border-b border-slate-800 pb-5">
            <div className="font-serif text-6xl text-indigo-400">{detail.sym}</div>
            <div>
              <h4 className="text-3xl font-bold">{detail.name}</h4>
              <p className="mt-2 inline-block rounded bg-white/10 px-2 py-1 font-mono text-xs text-slate-400">STATE_CODE: {key}</p>
            </div>
          </div>

          <div className="relative z-10 space-y-5">
            <div>
              <h5 className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-500">Classical Philosophy</h5>
              <p className="text-sm font-light leading-relaxed text-slate-300">{detail.classical}</p>
            </div>
            <div>
              <h5 className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-400">The Eightfold Way (팔정도 & SU(3))</h5>
              <p className="text-sm font-light leading-relaxed text-slate-300">{detail.eightfold}</p>
            </div>
            <div>
              <h5 className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-300">Symmetry Note</h5>
              <p className="text-sm font-light leading-relaxed text-slate-300">{detail.symmetry}</p>
            </div>
            <div>
              <h5 className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-rose-300">Decay / Transition</h5>
              <p className="text-sm font-light leading-relaxed text-slate-300">{detail.decay}</p>
            </div>
            <div>
              <h5 className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-300">Cosmology Link</h5>
              <p className="text-sm font-light leading-relaxed text-slate-300">{detail.cosmology}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
              <div>
                <h5 className="mb-1 text-[10px] font-bold uppercase text-slate-500">Baryon Octet (입자)</h5>
                <p className="text-base font-bold text-white">{detail.part}</p>
              </div>
              <div>
                <h5 className="mb-1 text-[10px] font-bold uppercase text-slate-500">Quark State (쿼크 조합)</h5>
                <p className="font-mono text-base font-bold text-emerald-400">{detail.quark}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}