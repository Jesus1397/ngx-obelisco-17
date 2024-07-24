export interface Column {
  key: string;
  value: string;
  customClasses?: string;
}

export interface DataSource {
  [key: string]: { data: string; customClasses?: string };
}

export interface TableCheckbox {
  title?: string;
  customClassesTh?: string;
  customClassesLabel?: string;
  isAllSelectable?: boolean;
}
