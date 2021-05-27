import * as React from 'react';
import { Box, Icon } from '@material-ui/core';
import { green, blueGrey } from '@material-ui/core/colors';
import { IPricingProps } from '../../../types/types';

const PriceAddition: React.FunctionComponent<IPricingProps> = ({
  targets,
  minutes,
  checked,
}: IPricingProps) => {
  return (
    <Box height="3rem">
      <Box display="flex" alignItems="center">
        <Icon style={{ marginRight: '4px', fontSize: 18, color: green[500] }}>
          add
        </Icon>
        <Box style={{ fontSize: 16, color: blueGrey[700] }}>
          {checked ? 'Unlimited' : targets} deployment targets
        </Box>
      </Box>
      {minutes !== undefined && minutes > 0 && (
        <Box display="flex" alignItems="center">
          <Icon style={{ marginRight: '4px', fontSize: 18, color: green[500] }}>
            add
          </Icon>
          <Box style={{ fontSize: 16, color: blueGrey[700] }}>
            {minutes} deployment minutes
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PriceAddition;
