import * as React from 'react';
import { Box, Icon } from '@material-ui/core';
import PopularBadge from './PopularBadge';
import { IPriceHeaderProps } from '../../../types/types';

const PriceHeader: React.FunctionComponent<IPriceHeaderProps> = ({
  iconName,
  iconColor,
  isPopular,
}: IPriceHeaderProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="1rem"
    >
      <Icon color={iconColor} style={{ fontSize: 32 }}>
        {iconName}
      </Icon>
      {isPopular && <PopularBadge />}
    </Box>
  );
};

export default PriceHeader;
