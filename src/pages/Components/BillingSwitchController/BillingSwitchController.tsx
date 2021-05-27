import * as React from 'react';
import { Typography, Box } from '@material-ui/core';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { IStateProps } from '../../../types/types';
import { ToggleOn } from '@material-ui/icons';

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 48,
      height: 24,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.common.white,
      '&$checked': {
        transform: 'translateX(24px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.success.main,
          borderColor: theme.palette.success.main,
        },
      },
    },
    thumb: {
      width: 19,
      height: 19,
      boxShadow: 'none',
      backgroundColor: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[300]}`,
      borderRadius: 24 / 2,
      opacity: 1,
      backgroundColor: theme.palette.grey[300],
    },
    checked: {},
  })
)(Switch);

const BillingSwitchController: React.FunctionComponent<IStateProps> = ({
  toggleOn,
  setToggleOn,
}: IStateProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggleOn({
      ...toggleOn,
      checked: event.target.checked,
      value: toggleOn.checked ? 'annually' : 'monthly',
    });
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography
        variant="body1"
        style={{
          marginRight: '12px',
          color: toggleOn.value === 'annually' ? 'black' : 'grey',
        }}
      >
        Annually
      </Typography>
      <AntSwitch
        checked={toggleOn.checked}
        onChange={handleChange}
        name="AntSwitch"
      />
      <Typography
        variant="body1"
        style={{
          marginLeft: '12px',
          color: toggleOn.value === 'monthly' ? 'black' : 'grey',
        }}
      >
        Monthly
      </Typography>
    </Box>
  );
};

export default BillingSwitchController;
