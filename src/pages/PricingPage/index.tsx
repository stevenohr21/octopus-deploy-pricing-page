import * as React from 'react';
import { useState } from 'react';
import { Typography, Box, Grid, makeStyles, Link } from '@material-ui/core';
import { ISwitchProps, ITargetValue } from '../../types/types';
import BillingSwitchController from '../Components/BillingSwitchController/BillingSwitchController';
import GlobalInputSlider from '../Components/GlobalInputSlider/GlobalInputSlider';
import CloudPricing from '../Components/CloudPricing/CloudPricing';
import ServerPricing from '../Components/ServerPricing/ServerPricing';

const useStyles = makeStyles({
  gridContainer: {
    maxWidth: '1800px',
    margin: '0 auto',
    position: 'relative',
    padding: '0 4rem',
  },
  gridItem: {
    zIndex: 1,
    paddingTop: '5rem !important',
  },
  colContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '7rem !important', //specificity of material ui reset
    height: '35rem',
  },
});

const PricingPage = () => {
  const [toggleOn, setToggleOn] = useState<ISwitchProps>({
    checked: true,
    value: 'monthly',
  });
  const [targets, setTargets] = useState<ITargetValue>({
    value: 10,
    type: 'targets',
  });
  const [minutes, setMinutes] = useState<ITargetValue>({
    value: 0,
    type: 'minutes',
  });
  const [checked, setChecked] = useState<any>(false);
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        padding={6}
        height="100%"
      >
        <Box width="80%" marginBottom={4}>
          <Typography variant="h1" color="secondary">
            Everything you need
          </Typography>
          <Typography variant="h1" color="secondary">
            for continuous delivery
          </Typography>
        </Box>
        <Box marginBottom={5}>
          <Typography variant="h4" color="secondary">
            Free for 10 deployment targets.
          </Typography>
          <Typography variant="h4" color="secondary">
            Pay only for what you use.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <BillingSwitchController
            toggleOn={toggleOn}
            setToggleOn={setToggleOn}
          />
        </Box>
      </Box>
      <Box className={classes.gridContainer}>
        <Box
          height="90%"
          width="77%"
          marginLeft="2rem"
          position="absolute"
          zIndex="0"
          bgcolor="secondary.main"
          borderRadius="4px"
        ></Box>
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid
            item
            md={4}
            className={`${classes.gridItem} ${classes.colContent}`}
          >
            <Typography
              variant="h2"
              style={{ marginBottom: '1rem', color: '#FFF' }}
            >
              Pay only
              <br />
              for what you use.
            </Typography>
            <Typography
              variant="body2"
              style={{ marginBottom: '3rem', color: '#FFF' }}
            >
              Our solution offers a single point of control for all your SaaS
              services, so you can be sure you're only paying for what you use.
            </Typography>
            <Box>
              <GlobalInputSlider
                label="*10 targets free, then charged $10 per deployment target"
                valueType={targets}
                setValueType={setTargets}
                maxValue={2000}
                style={{ marginBottom: '2rem' }}
              />
              <GlobalInputSlider
                label="*$0.03 per deployment minute"
                valueType={minutes}
                maxValue={10000}
                setValueType={setMinutes}
              />
            </Box>
          </Grid>
          <Grid item md={3} className={classes.gridItem}>
            <CloudPricing
              targets={targets.value}
              minutes={minutes.value}
              billing={toggleOn.value}
              checked={checked}
              setChecked={setChecked}
            />
          </Grid>
          <Grid item md={3} className={classes.gridItem}>
            <ServerPricing
              targets={targets.value}
              billing={toggleOn.value}
              checked={checked}
              setChecked={setChecked}
            />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" width="100%" justifyContent="center" marginY="3rem">
        <Box>
          Free for 10 deployment targets. No credit card required.{' '}
          <Link
            href="#"
            onClick={preventDefault}
            style={{ textDecorationStyle: 'dashed' }}
          >
            See full plan comparison
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PricingPage;
