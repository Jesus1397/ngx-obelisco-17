export interface Collapse {
  id?: string;
  icon?: string;
  label?: string;
  title?: string;
  isTitleAlone?: boolean;
  subtitle?: string;
  content?: string | string[];
  children?: CollapseItems[] | CollapseInputs[];
  customClassesHeader?: string;
  customClassesContent?: string;
}

export interface CollapseItems {
  label?: string;
  title?: string;
  subtitle?: string;
}

export interface CollapseInputs {
  icon?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  name?: string;
  value?: boolean;
}
