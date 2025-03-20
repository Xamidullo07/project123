import { create } from 'zustand';
import { DashboardState, Block } from './types';

export const useDashboardStore = create<DashboardState>((set) => ({
  blocks: [],
  addBlock: (block) =>
    set((state) => ({ blocks: [...state.blocks, block] })),
  removeBlock: (id) =>
    set((state) => ({ blocks: state.blocks.filter((b) => b.id !== id) })),
  updateBlock: (id, updates) =>
    set((state) => ({
      blocks: state.blocks.map((block) =>
        block.id === id ? { ...block, ...updates } : block
      ),
    })),
  updateLayout: (layout) =>
    set((state) => ({
      blocks: state.blocks.map((block) => {
        const layoutItem = layout.find((l) => l.i === block.id);
        if (layoutItem) {
          return {
            ...block,
            x: layoutItem.x,
            y: layoutItem.y,
            w: layoutItem.w,
            h: layoutItem.h,
          };
        }
        return block;
      }),
    })),
}));