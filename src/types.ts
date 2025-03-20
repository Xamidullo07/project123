export interface Block {
  id: string;
  type: 'line-chart' | 'bar-chart' | 'pie-chart' | 'image';
  content: any;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface DashboardState {
  blocks: Block[];
  addBlock: (block: Block) => void;
  removeBlock: (id: string) => void;
  updateBlock: (id: string, updates: Partial<Block>) => void;
  updateLayout: (layout: any[]) => void;
}