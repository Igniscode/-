interface TrigramProps {
  rotation: number;
  lines: boolean[];
  label: string;
}

export function Trigram({ rotation, lines, label }: TrigramProps) {
  return (
    <div className="absolute flex flex-col items-center gap-[5px] w-12" style={{ transform: `rotate(${rotation}deg) translateY(-160px)` }}>
      {lines.map((line, index) => (
        line ? (
          <div key={`${label}-${index}`} className="h-1.5 w-full bg-black"></div>
        ) : (
          <div key={`${label}-${index}`} className="flex h-1.5 w-full justify-between">
            <div className="w-[44%] bg-black"></div>
            <div className="w-[44%] bg-black"></div>
          </div>
        )
      ))}
      <span className="mt-1 text-[11px] font-bold text-black">{label}</span>
    </div>
  );
}