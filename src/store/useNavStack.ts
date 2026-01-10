import { create } from 'zustand';

interface NavStackState {
    stack: string[];
    push: (path: string) => void;
    pop: () => string | undefined;
    clear: () => void;
}

export const useNavStack = create<NavStackState>((set, get) => ({
    stack: [],
    push: (path: string) => set((state) => ({ stack: [...state.stack, path] })),
    pop: () => {
        const state = get();
        const path = state.stack[state.stack.length - 1];
        set({ stack: state.stack.slice(0, -1) });
        return path;
    },
    clear: () => set({ stack: [] }),
}));