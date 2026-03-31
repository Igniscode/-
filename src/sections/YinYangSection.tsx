import { useYinYangCanvas } from '../hooks/useYinYangCanvas';

interface YinYangSectionProps {
  active: boolean;
  mode: 'wave' | 'particle';
  onModeChange: (mode: 'wave' | 'particle') => void;
}

export function YinYangSection({ active, mode, onModeChange }: YinYangSectionProps) {
  const { canvasRef, containerRef } = useYinYangCanvas(active, mode);

  return (
    <section className={active ? 'section-active' : 'section-hidden'}>
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-black">음양: <span className="text-indigo-600">상보성 원리 (Complementarity)</span></h3>
            <p className="mt-4 leading-relaxed text-slate-600">현대 양자역학은 우주가 고정된 실체가 아닌, 상호 배타적인 두 기술 방식(파동/입자)의 동적 공존임을 보여줍니다. 보어의 상보성 원리는 "둘 중 하나가 틀렸다"가 아니라 "관측 설정에 따라 드러나는 표현이 달라진다"는 명제이며, 이는 음양의 관계론적 존재론과 깊게 공명합니다.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">중첩 상태는 존재의 부재가 아니라 기술의 다중성입니다. 측정은 단순히 값을 읽는 행위가 아니라 계와 장치가 상호작용하여 가능한 상태공간을 재구성하는 과정이며, 이때 확률 진폭의 분포가 특정 기저로 사상됩니다.</p>
          </div>

          <div className="relative min-h-[220px]">
            <div className={`yy-text-block absolute top-0 w-full rounded-r-2xl border-l-4 border-indigo-500 bg-slate-50 p-6 ${mode === 'wave' ? 'yy-text-active' : ''}`}>
              <h4 className="text-lg font-bold text-indigo-900">음(陰) : 잠재태와 파동함수</h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">동양 철학에서 음(陰)은 <strong>'숨겨짐', '형태가 없음(無形)', '잠재성'</strong>을 본질로 합니다. <br /><br />이는 양자역학에서 관측되기 전 에너지가 공간 전체에 확률 구름 형태로 퍼져 있는 <strong>파동함수의 중첩(Superposition)</strong> 상태와 완벽히 대응됩니다. 구체적인 실체로 드러나기 전, 우주의 모든 물리적 가능성을 내포하고 있는 근원적인 '비국소성(Non-locality)'의 장(Field)입니다.</p>
            </div>
            <div className={`yy-text-block absolute top-0 w-full rounded-r-2xl border-l-4 border-amber-500 bg-slate-50 p-6 ${mode === 'particle' ? 'yy-text-active' : ''}`}>
              <h4 className="text-lg font-bold text-amber-900">양(陽) : 현현태와 입자성</h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">반면 양(陽)은 <strong>'드러남', '형태를 갖춤(有形)', '구체적 실체'</strong>를 의미합니다. <br /><br />파동 상태의 양자계가 관측(상호작용)을 거치는 순간, 퍼져있던 확률은 즉각적으로 붕괴(Collapse)하여 질량, 위치, 스핀을 가진 구체적인 <strong>입자(Particle)</strong>로 현현합니다. 즉, 무한한 가능성(음)이 관측을 통해 국소성(Locality)을 띤 확정된 현실(양)로 전환되는 것입니다.</p>
            </div>
          </div>

          <div className="mt-[240px] rounded-2xl bg-black p-6 text-sm leading-relaxed text-slate-300 shadow-lg">
            <span className="font-mono block mb-2 text-[10px] font-bold uppercase tracking-widest text-indigo-400">Physics Context: Observation</span>
            양자역학에서 <strong>관측(Measurement)</strong>이라는 행위는 '음'의 확률성을 '양'의 현실로 강제 변환시키는 임계점입니다. 우주는 잠재된 파동(음)과 드러난 입자(양) 사이의 끊임없는 위상 전환을 통해 존재합니다.
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600">
            <h4 className="mb-2 font-bold text-slate-800">해석 보강: 파동함수 붕괴를 둘러싼 관점</h4>
            <p>코펜하겐 해석은 측정 이전 상태를 확률 진폭의 기술로 보고, 다세계 해석은 붕괴 대신 분기된 진화를 가정합니다. 어떤 해석을 선택하더라도 공통되는 사실은 관측 가능량이 관계적 맥락 속에서 의미를 얻는다는 점이며, 이는 음양을 고정 실체가 아닌 상호 규정 관계로 보는 철학적 시각과 맞닿습니다.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-md">
          <div className="mb-4 flex items-center justify-between px-2">
            <span className="text-xs font-bold tracking-tighter text-slate-500">QUANTUM FIELD SIMULATOR</span>
            <div className="flex space-x-1">
              <button onClick={() => onModeChange('wave')} className={mode === 'wave' ? 'rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-bold text-white transition-colors' : 'rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-bold text-slate-500 transition-colors'}>WAVE (陰)</button>
              <button onClick={() => onModeChange('particle')} className={mode === 'particle' ? 'rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold text-white transition-colors' : 'rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-bold text-slate-500 transition-colors'}>PARTICLE (陽)</button>
            </div>
          </div>
          <div ref={containerRef} onClick={() => onModeChange(mode === 'wave' ? 'particle' : 'wave')} className="relative h-[450px] w-full cursor-crosshair overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
            <canvas ref={canvasRef}></canvas>
            <div className="absolute left-4 top-4 font-mono text-[10px] text-white/50">{mode === 'wave' ? 'MODE: SUPERPOSITION (陰)' : 'MODE: COLLAPSE (陽)'}</div>
          </div>
          <p className="mt-4 text-center text-[11px] italic text-slate-400">시뮬레이션을 클릭하여 파동함수의 붕괴 현상을 직접 트리거 할 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}