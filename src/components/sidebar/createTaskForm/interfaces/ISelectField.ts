import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';

export interface ISelectItem {
  label: string;
  value: string;
}

export interface ISelectField extends IDisabled {
  label?: string;
  value?: string;
  name?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItem[];
}

// export interface ISelectItems {
//   value: string;
//   label: string;
// }
// export interface ISelectField extends IDisabled {
//   name?: string;
//   label?: string;
//   value?: string;
//   onChange?: (e: SelectChangeEvent) => void;
//   items: Array<ISelectItems>;
// }
