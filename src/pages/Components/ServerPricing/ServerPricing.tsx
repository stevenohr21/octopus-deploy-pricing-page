import * as React from 'react';
import { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import PriceCard from '../Shared/PriceCard';
import PriceHeader from '../Shared/PriceHeader';
import PriceAddition from '../Shared/PriceAddition';
import Price from '../Shared/Price';
import Offers from '../Shared/Offers';
import { IPricingProps } from '../../../types/types';

const ServerPricing: React.FunctionComponent<IPricingProps> = ({
  targets,
  minutes,
  billing,
  checked,
  setChecked,
}: IPricingProps) => {
  const [costTotal, setCostTotal] = useState<number | number[]>();
  const offers = [
    'Unlimited spaces',
    'Unlimited File Storage',
    '3 Concurrent Server Instances',
    'High Availability',
    'World class support team',
  ];
  return (
    <PriceCard>
      <PriceHeader iconName="storage" iconColor="secondary" isPopular={false} />
      <Box
        fontSize={18}
        fontWeight="500"
        color="secondary.main"
        marginBottom="1rem"
      >
        Server
      </Box>
      <PriceAddition targets={targets} minutes={minutes} checked={checked} />
      <Price
        targets={targets}
        minutes={minutes}
        billing={billing}
        isServer={true}
        checked={checked}
        setChecked={setChecked}
      />
      <Offers offers={offers} />
      <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ textTransform: 'initial', marginTop: 'auto' }}
        fullWidth
        disableElevation
      >
        Try for free
      </Button>
    </PriceCard>
  );
};

export default ServerPricing;
