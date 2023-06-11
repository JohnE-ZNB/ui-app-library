import { IBase } from './znb-base.interface';
import { keyBase } from './znb-base.types';

export const ZnbCompute = (structureClass: any, props: IBase) => {
  const classesToApply = [];
  classesToApply.push(ZnbConvertClass(structureClass.Base));
  if (typeof structureClass === 'object') {
    Object.keys(props).forEach((prop) => {
      const key = prop as keyBase;
      if (props[key] && structureClass[key]) {
        const stringClass = ZnbConvertClass(structureClass[key]);
        classesToApply.push(stringClass);
      }
    });
    classesToApply.push(ZnbConvertClass(structureClass.custom));
  }
  return classesToApply.join(' ');
};

export const ZnbConvertClass = (...args: any) => {
  const listClass: string[] = [];
  args.forEach((arg: any) => {
    if (typeof arg === 'object' && arg.constructor === Object) {
      Object.keys(arg).forEach((key) =>
        listClass.push(ZnbConvertClass(arg[key]))
      );
    } else if (Array.isArray(arg)) {
      listClass.push(...arg);
    } else if (typeof arg === 'string') {
      listClass.push(arg);
    }
  });
  return listClass.join(' ');
};
