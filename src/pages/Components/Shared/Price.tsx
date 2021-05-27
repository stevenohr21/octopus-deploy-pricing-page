import * as React from 'react';
import { useState } from 'react';
import { Box, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { IPricingProps } from '../../../types/types';
import { usePrevious } from '../../../hooks/usePrevious';
import {
  calcCharged,
  formatCcy,
  isCharged,
  isEligibleUnlimited,
} from '../../../utils';

const Price: React.FunctionComponent<IPricingProps> = ({
  targets,
  minutes,
  billing,
  isServer,
  checked,
  setChecked,
}: IPricingProps) => {
  const FREE_TARGETS = 10;
  const FREE_MINUTES = 100;
  const COST_PER_TARGET = 10;
  const COST_PER_MINUTE = 0.03;
  const UNLIMITED_PRICE = 192000;

  const targetsPrice = calcCharged(targets, FREE_TARGETS) * COST_PER_TARGET;
  const minutesPrice = calcCharged(minutes, FREE_MINUTES) * COST_PER_MINUTE;
  const totalPrice = targetsPrice + minutesPrice;

  const renderPrice = (price: number) =>
    billing === 'monthly' ? price : price * 12;

  const handleCheck = (callback: any) => {
    const element = callback.target as HTMLInputElement;
    const isChecked = element.checked;
    setChecked(isChecked);
  };

  return (
    <Box
      height="10rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box display="flex" alignItems="flex-end">
        <Typography variant="h2" color="primary">
          {checked
            ? formatCcy(renderPrice(UNLIMITED_PRICE))
            : formatCcy(renderPrice(totalPrice))}
        </Typography>
        <Box fontSize="16px" marginBottom="0.2rem" marginLeft="0.2rem">
          / {billing?.replace('ly', '')}
        </Box>
      </Box>
      <Box height="2rem">
        {isServer && (
          <FormControlLabel
            checked={checked}
            onChange={handleCheck}
            control={<Checkbox name="unlimitedTargets" />}
            label="Unlimited Targets"
          />
        )}
      </Box>
    </Box>
  );
};

export default Price;
