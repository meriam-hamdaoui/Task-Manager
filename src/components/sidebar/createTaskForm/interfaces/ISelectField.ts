import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';

export interface ISelectItem {
  label: string;
  value: string;
}

export interface ISelectField extends IDisabled {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items: Array<ISelectItem> | [];
}
