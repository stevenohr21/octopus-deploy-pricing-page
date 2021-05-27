import * as React from 'react';
import { Box, Theme, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      backgroundColor: '#FFF',
      borderRadius: '4px;',
      border: `solid 2px ${theme.palette.secondary.main}`,
      height: '600px',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    },
  })
);

const PriceCard = ({ children }: any) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      {children}
    </Box>
  );
};

export default PriceCard;
