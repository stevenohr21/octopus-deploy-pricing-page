import * as React from 'react';
import { Box, Icon } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { IOffersProps } from '../../../types/types';

const Offers: React.FunctionComponent<IOffersProps> = ({
  offers,
  checked,
}: any) => {
  return (
    <Box>
      {offers.map((offer: string) => (
        <Box display="flex" alignItems="center" marginBottom="10px">
          <Icon
            style={{ marginRight: '1rem', fontSize: '24px', color: green[500] }}
          >
            check_circle_outline
          </Icon>
          <Box fontSize="16px" fontWeight="400" color="secondary">
            {offer}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Offers;
