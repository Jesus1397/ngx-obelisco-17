export interface NavbarRouteBase {
  iconLeft?: string;
  title?: string;
  iconRight?: string;
  route?: string;
  link?: string;
}

export interface NavbarRoute extends NavbarRouteBase {
  children?: NavbarRouteItem[];
}

export interface NavbarRouteItem extends NavbarRouteBase {
  isOverviewItem?: boolean;
}

export interface NavbarRouteAccount extends NavbarRouteBase {
  children?: NavbarRouteAccountItem[];
}

export interface NavbarRouteAccountItem extends NavbarRouteBase {
  isDangerTitle?: boolean;
  isWithNotification?: boolean;
}

export interface NavbarRouteLogin extends NavbarRouteBase {}

export interface SearchbarItem {
  title: string;
  route: string;
}
