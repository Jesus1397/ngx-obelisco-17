import { BadgeTypes } from './public-api';

export interface CardBadge {
  text?: string;
  type?: BadgeTypes;
  link?: string;
  route?: string;
}
