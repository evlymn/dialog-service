import { ValidatorFn } from '@angular/forms';
export interface InputConfig {
  tipo: string;
  placeholder?: string;
  validators?: ValidatorFn[];
  labelOk?: string;
  labelCancel?: string;
}
