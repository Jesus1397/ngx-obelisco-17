export interface BreadcrumbRoute {
  name: string;
  id?: string;
  route?: string;
}

export interface Breadcrumb {
  routes?: BreadcrumbRoute[];
  defaultRoute?: string;
}
