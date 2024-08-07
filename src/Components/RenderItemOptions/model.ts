import { TypeOfShow } from "../../Screens/Home/types";

export interface RenderItemHorizontalProps {
  id: number
}

export interface RenderItemHorizontalList {
  item: TypeOfShow; 
  renderSkeleton?: boolean;
  handleRenderItem: (genre: string) => void;
  selectedOption: {id: number} | null;
}

export interface ContainerOptionsProps {
  selectedOption: boolean;
}