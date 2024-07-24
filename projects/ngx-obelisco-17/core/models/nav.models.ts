export interface NavHorizontalItems {
  title: string;
  link?: string;
  route?: string;
  child?: any;
  isDisabled?: boolean;
  icon?: string;
}

export interface NavVerticalItems {
  title: string;
  route?: string;
  isDisabled?: boolean;
  icon?: string;
  children?: NavVerticalItems[];
}

export interface TabsProps extends NavHorizontalItems {
  isActive?: boolean;
  iconRight?: boolean;
  child?: any;
}
