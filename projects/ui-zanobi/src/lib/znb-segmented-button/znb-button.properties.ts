import { IBase } from '../znb-base/znb-base.interface';
import { Colors } from '../znb-base/znb-base.types';
export const ButtonConfig = (props: IBase, classCustom: string) => {
  const Color = ButtonColor(props);
  const { Segmented } = props;
  return {
    custom: classCustom ? classCustom : '',
    Base: 'flex text-center justify-center items-center appearance-none py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10 w-full flex',
    Rounded: Segmented ? '' : 'rounded-lg  ',
    Pill: Segmented ? '' : 'rounded-full',
    Raised: Segmented ? '' : 'shadow active:shadow-lg',
    Outline: {
      base: Segmented ? `border-r-2` : 'border-2',
      color: `${Color.Outline}`,
      darK: '',
    },
    Fill: {
      base: Segmented ? `border-r` : 'border-2',
      color: `${Color.Fill}`,
      darK: '',
    },
  };
};

const ButtonColor = (props: IBase) => {
  const { Color } = props;
  const key = Color as Colors;
  const classesColor = {
    Primary: {
      Outline:
        'text-primary border-primary [&.active]:text-primary-on [&.active]:bg-primary',
      Fill: 'bg-primary text-primary-on border-primary-shade [&.active]:bg-primary-shade',
    },
    Secondary: {
      Outline:
        'text-secondary border-secondary [&.active]:text-secondary-on [&.active]:bg-secondary',
      Fill: 'bg-secondary text-secondary-on border-secondary-shade [&.active]:bg-secondary-shade',
    },
    Success: {
      Outline:
        'text-success border-success [&.active]:text-success-on [&.active]:bg-success',
      Fill: 'bg-success text-success-on border-success [&.active]:bg-success-shade',
    },
    Warning: {
      Outline:
        'text-warning border-warning [&.active]:text-warning-on [&.active]:bg-warning',
      Fill: 'bg-warning text-warning-on border-warning-shade [&.active]:bg-warning-shade',
    },
    Danger: {
      Outline:
        'text-danger border-danger [&.active]:text-danger-on [&.active]:bg-danger',
      Fill: 'bg-danger text-danger-on border-danger-shade [&.active]:bg-danger-shade',
    },
    Info: {
      Outline: 'text-info border-info [&.active]:text-info-on [&.active]:bg-info',
      Fill: 'bg-info text-info-on border-info-shade [&.active]:bg-info-shade',
    },
  };
  return classesColor[key];
};
