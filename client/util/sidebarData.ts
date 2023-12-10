export interface subLink {
    label: string,
    value: string,
    link: string,
  }
  
  export interface link {
    label: string,
    icon: React.ReactNode,
    value: string,
    link: string,
    sub: subLink[],
  }
  