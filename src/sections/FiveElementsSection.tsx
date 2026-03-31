import { elements } from '../data/content';
import { MathBlock } from '../components/MathBlock';
import type { ElementKey } from '../types';

interface FiveElementsSectionProps {
  active: boolean;
  selected: ElementKey | null;
  onSelect: (key: ElementKey) => void;
}

const cards: Array<{ key: ElementKey; title: string; description: string; accent: string; text: string }> = [
  { key: 'wood', title: '木 (Wood) : 강력 (Strong Force) & 생장', description: '응축을 이겨내고 폭발적으로 결합하며 뻗어나가는 팽창의 에너지 위상.', accent: 'border-green-500', text: 'text-green-700' },
  { key: 'fire', title: '火 (Fire) : 전자기력 (Electromagnetic) & 분산', description: '에너지가 빛과 열로 무질서하게 흩어지며 엔트로피가 급증하는 방사 위상.', accent: 'border-red-500', text: 'text-red-700' },
  { key: 'earth', title: '土 (Earth) : 힉스장·중력 (Gravity) & 평형', description: '에너지에 질량을 부여하고 시공간을 휘게 하여 우주의 균형을 잡는 매개 위상.', accent: 'border-amber-500', text: 'text-amber-700' },
  { key: 'metal', title: '金 (Metal) : 약력 (Weak Force) & 수축', description: '입자를 붕괴시키거나 견고한 결정 구조로 수축시켜 밀도를 높이는 응축 위상.', accent: 'border-slate-500', text: 'text-slate-700' },
  { key: 'water', title: '水 (Water) : 암흑에너지 & 진공 (Vacuum)', description: '가장 낮은 에너지 상태로 침잠하여 새로운 순환을 잉태하는 기저 위상.', accent: 'border-blue-500', text: 'text-blue-700' }
];

export function FiveElementsSection({ active, selected, onSelect }: FiveElementsSectionProps) {
  const current = selected ? elements[selected] : elements.wood;

  return (
    <section className={active ? 'section-active' : 'section-hidden'}>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-black">오행: <span className="text-emerald-600">위상 상전이와 상호작용</span></h3>
            <p className="mt-3 leading-relaxed text-slate-600">오행(五行)은 단순한 물질의 분류가 아닙니다. 이는 에너지가 변환되는 <strong>동적 평형(Dynamic Equilibrium)</strong>의 5가지 위상입니다. 현대 물리학의 <strong>표준 모형(Standard Model)</strong>에서 에너지를 지배하는 4가지 기본 상호작용 및 진공 에너지가 빚어내는 고도의 열역학적 상전이(Phase Transition) 과정과 완벽히 매핑됩니다.</p>
          </div>

          <div className="space-y-3">
            {cards.map((card) => (
              <div key={card.key} onClick={() => onSelect(card.key)} className={`interactive-card rounded-xl border-l-8 bg-white p-4 ${card.accent}`}>
                <h4 className={`font-bold ${card.text}`}>{card.title}</h4>
                <p className="mt-1 text-xs text-slate-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 lg:sticky lg:top-24">
          <div className="min-h-[300px] w-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-inner transition-all">
            <h5 className="mb-4 border-b border-slate-200 pb-2 text-lg font-bold" style={{ color: selected ? current.color : '#000000' }}>에너지 위상 심층 분석</h5>
            {selected ? (
              <div className="fade-in-content space-y-3">
                <div>
                  <span className="mb-1 inline-block rounded bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">철학적 본질</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.phil}</p>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700">현대 물리학 매핑</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.phys}</p>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">열역학적 상태 (Thermodynamics)</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.thermo}</p>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">철학-물리 연결고리</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.bridge}</p>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-700">정량 모델</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.equation}</p>
                  <div className="mt-2 flex justify-center rounded-lg bg-white px-4 py-3">
                    <MathBlock latex={current.equationLatex} display />
                  </div>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-purple-700">관측 및 실험 맥락</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.experiment}</p>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700">해석적 함의</span>
                  <p className="text-sm leading-relaxed text-slate-700">{current.insight}</p>
                </div>
              </div>
            ) : (
              <p className="mt-8 text-center text-sm italic text-slate-500">좌측의 5가지 위상 요소를 클릭하여<br />철학과 물리학이 교차하는 심층 해설을 확인하십시오.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}