import * as React from 'react';
import { Box, Icon } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';

const PopularBadge = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      border="1.5px solid"
      borderColor="secondary"
      borderRadius="4px"
      alignItems="center"
      width="7rem"
      height="1.6rem"
      padding="0.5rem 0.3rem"
    >
      <Icon style={{ fontSize: 18, color: yellow[700] }}>star</Icon>
      <Box fontSize="12px" fontWeight="500" color="secondary">
        Most Popular
      </Box>
    </Box>
  );
};

export default PopularBadge;
