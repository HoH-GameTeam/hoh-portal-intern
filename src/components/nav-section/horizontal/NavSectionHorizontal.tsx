import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

import { NavHorizontalWrapper } from './styles';
import { IconCasino, IconBell, IconMessage2 } from '../../../assets/icons';
import NavItem from './NavItem';
import { useLocales } from '../../../locales';

interface Props {
  onOpenNav: VoidFunction;
}

export default function NavSectionHorizontal({ onOpenNav }: Props) {
  const { translate } = useLocales();
  const navigate = useNavigate();

  const navItems = [
    {
      key: 'menu',
      onClick: onOpenNav,
      icon: <MenuRoundedIcon />,
    },
    {
      key: 'game_hub',
      onClick: () => {
        navigate('/casino/list');
      },
      icon: <IconCasino />,
    },
    {
      key: 'notification',
      onClick: () => {},
      icon: (
        <Badge color="error" sx={{ mb: 1 }} badgeContent={49}>
          <IconBell />
        </Badge>
      ),
    },
    {
      key: 'chat_room',
      onClick: () => {},
      icon: (
        <Badge color="error" sx={{ mb: 1 }} badgeContent={69}>
          <IconMessage2 />
        </Badge>
      ),
    },
  ];

  return (
    <NavHorizontalWrapper>
      {navItems.map((navItem) => (
        <NavItem
          icon={navItem.icon}
          key={navItem.key}
          title={translate(navItem.key)}
          handleClick={navItem.onClick}
        />
      ))}
    </NavHorizontalWrapper>
  );
}
