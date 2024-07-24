import { Positions } from './positions.models';

export interface DropdownNavigationItem {
  id?: string;
  text?: string;
  textPosition?: Positions;
  iconLeft?: string;
  iconRight?: string;
  isAnimatedIconRight?: boolean;
  isAnimatedIconLeft?: boolean;
  isItemDanger?: boolean;
  route?: string;
  link?: string;
  isDisabled?: boolean;
  children?: DropdownNavigationItem[];
  customClasses?: string;
}

export interface DropdownSelectionItem {
  id?: string;
  text?: string;
  name?: string;
  value?: string;
  isDisabled?: boolean;
  customClasses?: string;
}
