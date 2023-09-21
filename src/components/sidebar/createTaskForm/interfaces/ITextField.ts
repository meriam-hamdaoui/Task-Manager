import React from 'react';
import { IDisabled } from './IDisabled';

type Event = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface ITextField extends IDisabled {
  onChange?: (e: Event) => void;
}
