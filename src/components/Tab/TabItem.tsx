import { Typography } from '@mui/material';
import React from 'react';

import { TabItemWrapper } from './styles';

interface TabItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  isDisabled?: boolean;
}

const TabItem = ({ isActive, label, onClick, isDisabled }: TabItemProps) => (
  <TabItemWrapper
    $isDisabled={isDisabled}
    $isActive={isActive}
    onClick={onClick}
  >
    <Typography>{label}</Typography>
  </TabItemWrapper>
);

TabItem.defaultProps = {
  isDisabled: false,
};

export default TabItem;
