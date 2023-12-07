export interface ITitleChildren {
  id: number;
  title: string;
}

export interface ISidebarData {
  id: number;
  icon?: React.ReactNode;
  titleParent: string;
  titleChildren?: ITitleChildren[];
}
