export interface AlertListItems {
  text?: string;
  url?: string;
}
export interface AlertList {
  isUnorderedList?: boolean;
  listItems: AlertListItems[];
}
