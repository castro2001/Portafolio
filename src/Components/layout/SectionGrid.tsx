import type { ReactNode } from "react";


type ModeGrid = "column-4" | "column-2" | "column-3"

interface SectionGridProps {
  children: ReactNode;
  mode:ModeGrid;
}

export const SectionGrid = ({ children,mode }: SectionGridProps) => {

    const gridClass: Record<ModeGrid,string> = {
        "column-2": "grid-cols-1 md:grid-cols-2 gap-6 ",
        "column-3":"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        "column-4":"grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    }

  return (
    <div className={`grid ${gridClass[mode]} `}>

      {children}
    </div>
  );
};


