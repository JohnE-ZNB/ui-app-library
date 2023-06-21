import { IBase } from "../znb-base/znb-base.interface";
import { Colors } from '../znb-base/znb-base.types';

export const segmentedClass = (props: IBase, classCustom: string) => {
  const Color = segmentedColor(props);
  const { Outline } = props;
  return {
    custom: classCustom ? classCustom : '',
    Base: 'flex justify-center items-center overflow-hidden w-full [&>*:last-child]:border-r-0',
    Round: 'rounded-lg',
    Pill: 'rounded-full',
    Raised: Outline
      ? 'shadow'
      : 'shadow divide-x divide-black divide-opacity-10',
    Outline: {
      base: `border-2 ${Color.Outline}`,
      light: '',
      dark: '',
    },
    Fill: {
      base: `border ${Color.Fill}`,
      light: '',
      dark: '',
    },
    Flat: {
      base: 'p-0.5 space-x-1 relative',
      light: '',
      dark: '',
    },
  };
};

const segmentedColor = (props: IBase) => {
  const { Color } = props;
  const key = Color as Colors;
  const classColor = {
    Primary: {
      Outline:
        'border-primary',
      Fill: 'border-primary-shade',
    },
    Secondary: {
      Outline:
        'border-secondary',
      Fill: 'border-secondary-shade',
    },
    Success: {
      Outline:
        'border-success',
      Fill: 'border-success-shade',
    },
    Warning: {
      Outline:
        'border-warning',
      Fill: 'border-warning-shade',
    },
    Danger: {
      Outline:
        'border-danger',
      Fill: 'border-danger-shade',
    },
    Info: {
      Outline:
        'border-info',
      Fill: 'border-info-shade',
    },
  };
  return classColor[key];
};

