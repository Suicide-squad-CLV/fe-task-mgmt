import { TaskInfo } from "@/components/task-board/GqlType";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Tasks {
  draggedTask: TaskInfo | null;
}

interface Actions {
  setDraggedTask: (dragTask: TaskInfo | null) => void;
}

// persist store
export const useGeneralStore = create<Tasks & Actions>()(
  devtools((set) => ({
    draggedTask: null,
    setDraggedTask: (dragTask) => set((_) => ({ draggedTask: dragTask })),
  })),
);
