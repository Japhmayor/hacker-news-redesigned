import { isInt } from '../../utils/utils.math';

const spacingUnit = 4;

export function spacing(index) {
  if (!(isInt(index) && index > 0 && index <= 20)) {
    console.error('Spacing utility expects an integer between 1 and 10.');
    return;
  }
  
  return `${spacingUnit * index}px`;
}
