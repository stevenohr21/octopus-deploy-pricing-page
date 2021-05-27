import * as React from 'react';
import { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import PriceCard from '../Shared/PriceCard';
import PriceHeader from '../Shared/PriceHeader';
import PriceAddition from '../Shared/PriceAddition';
import Price from '../Shared/Price';
import Offers from '../Shared/Offers';
import { IPricingProps } from '../../../types/types';

const CloudPricing: React.FunctionComponent<IPricingProps> = ({
  targets,
  minutes,
  billing,
}: IPricingProps) => {
  const [costTotal, setCostTotal] = useState<number | number[]>();
  const offers = [
    'Unlimited spaces',
    '20GB File Storage',
    '1 Concurrent Server Instance',
    'World class support team',
  ];
  return (
    <PriceCard>
      <PriceHeader iconName="cloud_done" iconColor="primary" isPopular={true} />
      <Box
        fontSize={18}
        fontWeight="500"
        color="primary.main"
        marginBottom="1rem"
      >
        Cloud
      </Box>
      <PriceAddition targets={targets} minutes={minutes} />
      <Price targets={targets} minutes={minutes} billing={billing} />
      <Offers offers={offers} />
      <Button
        size="large"
        variant="outlined"
        color="primary"
        style={{ textTransform: 'initial', marginTop: 'auto' }}
        fullWidth
      >
        Try for free
      </Button>
    </PriceCard>
  );
};

export default CloudPricing;
