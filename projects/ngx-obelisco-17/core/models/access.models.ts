export interface AccessList {
  header?: AccessHeader;
  children?: Access[] | AccessCategory[];
  footer?: AccessFootter;
}

export interface AccessHeader {
  title?: string;
  description?: string;
  icon?: string;
  iconPositionLeft?: boolean;
  iconText?: string;
}

export interface Access {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  route?: string;
}

export interface AccessCategory {
  title?: string;
  children?: Access[];
}

export interface AccessFootter {
  link?: string;
  route?: string;
  icon?: string;
  title?: string;
}
