export type Types = 'primary' | 'success' | 'danger' | 'info';

export type AlertTypes = 'success' | 'danger' | 'info' | 'warning';

export type StatusMessageTypes =
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'
  | 'institutional';

export type SpinnerTypes = Types | 'secondary' | 'dark' | 'light';

export type BadgeTypes = 'default' | 'danger' | 'info' | 'success' | 'warning';

export type ProgressBarTypes = 'info' | 'success';

export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'tertiary';

export type CromaticTypes =
  | 'sky'
  | 'lavender'
  | 'coral'
  | 'avocado'
  | 'citrus'
  | 'lime'
  | 'pistachio'
  | 'berries'
  | 'musket'
  | 'blackberry'
  | 'aqua'
  | 'strawberry';

export type ActiveDayTypes = CromaticTypes | 'secondary' | 'gray';

export enum EnumTypes {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
}

export enum EnumAlertTypes {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
}

export enum EnumStatusMessageTypes {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
  Institutional = 'institutional',
}

export enum EnumSpinnerTypes {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
  Secondary = 'secondary',
  Dark = 'dark',
  Light = 'light',
}

export enum EnumProgressBarTypes {
  Info = 'info',
  Success = 'success',
}

export enum EnumBadgeTypes {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
  Secondary = 'secondary',
}

export enum EnumButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Link = 'link',
}
