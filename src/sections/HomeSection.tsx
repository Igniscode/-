import { trigrams } from '../data/content';
import { Trigram } from '../components/Trigram';

export function HomeSection() {
  return (
    <section className="section-active">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="relative mx-auto flex h-[450px] w-[450px] shrink-0 items-center justify-center rounded-full border border-slate-100 bg-slate-50 shadow-inner">
          <div className="relative z-10 h-36 w-36 animate-[spin_15s_linear_infinite] rounded-full border-2 border-black shadow-xl" style={{ background: 'linear-gradient(to right, #fff 50%, #000 50%)' }}>
            <div className="absolute left-1/4 top-0 h-[72px] w-[72px] rounded-full" style={{ background: 'radial-gradient(circle, #000 23%, #fff 24%)' }}></div>
            <div className="absolute bottom-0 left-1/4 h-[72px] w-[72px] rounded-full" style={{ background: 'radial-gradient(circle, #fff 23%, #000 24%)' }}></div>
          </div>
          {trigrams.map((trigram) => (
            <Trigram key={`${trigram.label}-${trigram.rotation}`} rotation={trigram.rotation} lines={trigram.lines} label={trigram.label} />
          ))}
        </div>

        <div className="flex-1 space-y-8">
          <div>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-black">동양의 기하학, <br />물리학의 정보가 되다</h2>
            <p className="text-lg leading-relaxed text-slate-600">수천 년 전 동양의 현자들이 직관한 우주의 질서는 현대 물리학의 양자역학, 장론, 열역학, 정보 이론과 다층적으로 수렴합니다. 본 프로젝트는 단순한 상징 비교가 아니라, 상태 전이·대칭·보존 법칙이라는 공통 언어를 통해 동양 철학 모델과 과학 모델을 동시 해석하는 시도입니다.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">핵심 접근법은 세 단계입니다. 첫째, 음양·오행·팔괘를 정적 개념이 아니라 동역학적 상태공간으로 재정의합니다. 둘째, 각 상태를 물리학의 관측 가능한 변수(에너지 밀도, 전이 경로, 상호작용 강도, 대칭군 표현)로 맵핑합니다. 셋째, 이 매핑을 시각적·서사적 구조로 통합하여 이론 간의 공통 구조를 드러냅니다.</p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex items-start space-x-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="mt-1 text-2xl text-indigo-600">☯</span>
              <div>
                <h4 className="font-bold text-black">상보성과 얽힘 (Quantum Dualism)</h4>
                <p className="mt-1 text-sm text-slate-500">파동-입자 이중성과 양자적 대칭성으로 해석되는 음양의 논리.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="mt-1 text-2xl text-emerald-600">🔄</span>
              <div>
                <h4 className="font-bold text-black">에너지 위상 기하학 (Phase Dynamics)</h4>
                <p className="mt-1 text-sm text-slate-500">4대 기본 상호작용과 열역학적 상태 변화로 매핑되는 오행의 순환.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="mt-1 text-2xl text-amber-600">🔢</span>
              <div>
                <h4 className="font-bold text-black">팔정도와 3비트 정보 (The Eightfold Way)</h4>
                <p className="mt-1 text-sm text-slate-500">입자 물리학의 팔중항(Baryon Octet) 구조로 증명되는 팔괘 매트릭스.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">Research Frame</h4>
            <p className="text-sm leading-relaxed text-slate-600">이 페이지는 세계관을 설명하는 에세이가 아니라, 개념 간 대응 관계를 점검하는 인터랙티브 초록입니다. 각 탭은 서로 다른 스케일을 다룹니다: 음양은 측정과 상태결정의 미시 동역학, 오행은 에너지 위상 전환의 중간 스케일, 팔괘는 이산 상태코드와 군대칭의 정보 스케일을 담당합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}