export interface Phone {
  title: string;
  number: number;
}
export interface Network {
  title: string;
  src: string;
  icon?: string;
}
export interface Link {
  title: string;
  src: string;
}

export interface CustomContent {
  title?: string;
  content?: string | string[];
}
