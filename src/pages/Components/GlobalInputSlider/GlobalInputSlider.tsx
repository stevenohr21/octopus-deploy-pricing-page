import * as React from 'react';
import { useState } from 'react';
import { Box, TextField, Slider, Typography } from '@material-ui/core';
import { ISliderProps } from '../../../types/types';

const GlobalInputSlider: React.FunctionComponent<ISliderProps> = ({
  label,
  valueType,
  setValueType,
  maxValue,
  ...rest
}: ISliderProps) => {
  const handleTargetSlider = (event: any, newValue: number | number[]) => {
    setValueType({ ...valueType, value: newValue });
  };
  const handleTargetInput = (event: any) => {
    setValueType({
      ...valueType,
      value: event.target.value,
    });
  };

  const handleBlur = (event: any) => {
    if (event.currentTarget.value < 0) {
      setValueType({
        ...valueType,
        value: 0,
      });
    } else if (event.target.value > maxValue) {
      setValueType({
        ...valueType,
        value: maxValue,
      });
    }
  };

  const { type, value } = valueType;

  return (
    <Box {...rest}>
      <TextField
        defaultValue={type === 'minutes' ? 0 : 10}
        type="number"
        size="medium"
        variant="outlined"
        value={value}
        onChange={handleTargetInput}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: maxValue,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
        style={{
          marginBottom: '0.5rem',
          backgroundColor: '#FFF',
          borderRadius: '4px',
        }}
      />
      <Typography variant="subtitle1" style={{ color: '#FFF' }}>
        {label}
      </Typography>
      <Slider
        defaultValue={type === 'minutes' ? 0 : 10}
        value={value}
        min={0}
        step={10}
        max={maxValue}
        onChange={handleTargetSlider}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default GlobalInputSlider;
