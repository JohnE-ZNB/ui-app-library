import { IBase } from '../znb-base/znb-base.interface';
import { Colors } from '../znb-base/znb-base.types';

export const ButtonClass = (props: IBase, classCustom: string) => {
  const color = ButtonColor(props);
  const iconColor = IconColor(props);
  const { Segmented } = props;
  return {
    custom: classCustom ? classCustom : '',
    Base: {
      dafault:
        'znb-text-label-lg h-10 flex text-center justify-center items-center appearance-none transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10 w-full flex',
      segmented: Segmented ? `px-3` : 'px-6',
      icon: `[&>svg]:flex-none [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:mr-2 [&>svg]:pointer-events-none [&>img]:flex-none [&>img]:h-[18px] [&>img]:w-[18px] [&>img]:mr-2 [&>icon]:flex-none [&>icon]:h-[18px] [&>icon]:w-[18px] [&>icon]:mr-2`,
    },
    Rounded: Segmented ? '' : 'rounded-lg',
    Pill: Segmented ? '' : 'rounded-full',
    Raised: Segmented ? 'shadow' : 'shadow active:shadow-lg',
    Outline: {
      base: Segmented ? `` : 'border-2',
      color: Segmented
        ? `${color.outline.segmented}`
        : `${color.outline.default}`,
      icon: `${iconColor.outline}`,
      darK: '',
    },
    Fill: {
      base: Segmented ? `` : 'border-2',
      color: Segmented ? `${color.fill.segmented}` : `${color.fill.default}`,
      icon: `${iconColor.fill}`,
      darK: '',
    },
    Usual: {
      color: Segmented ? '' : `${color.usual}`,
      icon: `${iconColor.usual}`,
      darK: '',
    },
  };
};

const ButtonColor = (props: IBase) => {
  const { Color, Horizontal } = props;
  const key = Color as Colors;
  const classesColor = {
    Primary: {
      outline: {
        default: 'text-primary  border-primary active:bg-primary-container',
        segmented: Horizontal
          ? 'text-primary border-primary [&.active]:text-primary-on [&.active]:bg-primary'
          : '',
      },
      fill: {
        default:
          'bg-primary text-primary-on border-primary active:bg-primary-shade active:border-primary-shade',
        segmented: Horizontal
          ? 'bg-primary text-primary-on border-primary-shade [&.active]:bg-primary-shade'
          : '',
      },
      usual: 'text-primary active:bg-primary-container',
    },
    Secondary: {
      outline: {
        default:
          'text-secondary border-secondary active:bg-secondary-container',
        segmented: Horizontal
          ? 'text-secondary border-secondary [&.active]:text-secondary-on [&.active]:bg-secondary'
          : '',
      },
      fill: {
        default:
          'bg-secondary text-secondary-on border-secondary active:bg-secondary-shade active:border-secondary-shade',
        segmented: Horizontal
          ? 'bg-secondary text-secondary-on border-secondary-shade [&.active]:bg-secondary-shade'
          : '',
      },
      usual: 'text-secondary active:bg-secondary-container',
    },
    Success: {
      outline: {
        default:
          'text-success border-success active:bg-success-container active:text-success',
        segmented: Horizontal
          ? 'text-success border-success [&.active]:text-success-on [&.active]:bg-success'
          : '',
      },
      fill: {
        default:
          'bg-success text-success-on border-success active:bg-success-shade active:border-success-shade',
        segmented: Horizontal
          ? 'bg-success text-success-on border-success-shade [&.active]:bg-success-shade'
          : '',
      },
      usual: 'text-success active:bg-success-container',
    },
    Warning: {
      outline: {
        default:
          'text-warning  border-warning active:bg-warning-container active:text-warning',
        segmented: Horizontal
          ? 'text-warning border-warning [&.active]:text-warning-on [&.active]:bg-warning'
          : '',
      },
      fill: {
        default:
          'bg-warning text-warning-on border-warning active:bg-warning-shade active:border-warning-shade',
        segmented: Horizontal
          ? 'bg-warning text-warning-on border-warning-shade [&.active]:bg-warning-shade'
          : '',
      },
      usual: 'text-warning active:bg-warning-container',
    },
    Danger: {
      outline: {
        default:
          'text-danger  border-danger active:bg-danger-container active:text-danger',
        segmented: Horizontal
          ? 'text-danger border-danger [&.active]:text-danger-on [&.active]:bg-danger'
          : '',
      },
      fill: {
        default:
          'bg-danger text-danger-on border-danger active:bg-danger-shade active:border-danger-shade',
        segmented: Horizontal
          ? 'bg-danger text-danger-on border-danger-shade [&.active]:bg-danger-shade'
          : '',
      },
      usual: 'text-danger active:bg-danger-container',
    },
    Info: {
      outline: {
        default:
          'text-info  border-info active:bg-info-container active:text-info',
        segmented: Horizontal
          ? 'text-info border-info [&.active]:text-info-on [&.active]:bg-info'
          : '',
      },
      fill: {
        default:
          'bg-info text-info-on border-info active:bg-info-shade active:border-info-shade',
        segmented: Horizontal
          ? 'bg-info text-info-on border-info-shade [&.active]:bg-info-shade'
          : '',
      },
      usual: 'text-info active:bg-info-container',
    },
  };
  return classesColor[key];
};

const IconColor = (props: IBase) => {
  const { Color, Horizontal } = props;
  const key = Color as Colors;
  const classesColor = {
    Primary: {
      outline: '[&>svg]:fill-primary [&.active>svg]:fill-primary-on',
      fill: '[&>svg]:fill-primary-on [&.active>svg]:fill-primary-on',
      usual: '[&>svg]:fill-primary [&.active>svg]:fill-primary-on',
    },
    Secondary: {
      outline: '[&>svg]:fill-secondary [&.active>svg]:fill-secondary-on',
      fill: '[&>svg]:fill-secondary-on [&.active>svg]:fill-secondary-on',
      usual: '[&>svg]:fill-secondary [&.active>svg]:fill-secondary-on',
    },
    Success: {
      outline: '[&>svg]:fill-success [&.active>svg]:fill-success-on',
      fill: '[&>svg]:fill-success-on [&.active>svg]:fill-success-on',
      usual: '[&>svg]:fill-success [&.active>svg]:fill-success-on',
    },
    Warning: {
      outline: '[&>svg]:fill-warning [&.active>svg]:fill-warning-on',
      fill: '[&>svg]:fill-warning-on [&.active>svg]:fill-warning-on',
      usual: '[&>svg]:fill-warning [&.active>svg]:fill-warning-on',
    },
    Danger: {
      outline: '[&>svg]:fill-danger [&.active>svg]:fill-danger-on',
      fill: '[&>svg]:fill-danger-on [&.active>svg]:fill-danger-on',
      usual: '[&>svg]:fill-danger [&.active>svg]:fill-danger-on',
    },
    Info: {
      outline: '[&>svg]:fill-info [&.active>svg]:fill-info-on',
      fill: '[&>svg]:fill-info-on [&.active>svg]:fill-info-on',
      usual: '[&>svg]:fill-info [&.active>svg]:fill-info-on',
    },
  };
  return classesColor[key];
};
