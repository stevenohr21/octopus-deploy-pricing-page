export interface ISwitchProps {
  checked: boolean | undefined;
  value: string;
}

export interface IStateProps {
  toggleOn: ISwitchProps;
  setToggleOn: function;
}

export interface ITargetValue {
  value: number | number[];
  type: string;
}

export interface ISliderProps {
  label: string;
  valueType: ITargetValue;
  setValueType: function;
  maxValue: number;
  style?: CSSProperties | null;
}

export interface IPricingProps {
  targets: number | number[];
  minutes?: number | number[];
  billing?: string;
  isServer?: boolean;
  checked?: boolean;
  setChecked?: function;
}

export interface IPriceHeaderProps {
  iconName: string;
  iconColor: any;
  isPopular: boolean;
}

export interface IOffersProps {
  offers: string[];
}
