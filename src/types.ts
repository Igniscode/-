export type TabId = 'home' | 'yy' | 'five' | 'bagua';

export type ElementKey = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export interface ElementDetail {
  title: string;
  phil: string;
  phys: string;
  thermo: string;
  bridge: string;
  equation: string;
  equationLatex: string;
  experiment: string;
  insight: string;
  data: number[];
  color: string;
}

export interface BaguaDetail {
  sym: string;
  name: string;
  classical: string;
  eightfold: string;
  symmetry: string;
  decay: string;
  cosmology: string;
  part: string;
  quark: string;
  color: string;
}

export interface TrigramDefinition {
  rotation: number;
  lines: boolean[];
  label: string;
}