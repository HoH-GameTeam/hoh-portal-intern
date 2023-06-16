import { StackProps, ListItemButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

export type INavItem = {
  item: NavListProps;
  depth: number;
  open?: boolean;
  active?: boolean;
  isExternalLink?: boolean;
};

export type NavItemProps = INavItem & ListItemButtonProps;

export type NavListProps = {
  key: string;
  icon?: React.ReactElement;
  path?: string;
  type: string;
  disable?: boolean;
  items?: NavListProps[];
};

export interface NavSectionProps extends StackProps {
  data: NavListProps[];
}
