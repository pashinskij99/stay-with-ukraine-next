import { ChangeEvent, Dispatch, FocusEvent,SetStateAction } from 'react';

export type ExtendedTextFieldType = {
  placeholder: string;
  buttonText?: string;
  buttonIcon?: string;
  error?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement> | string) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string;
  buttonAction?: any;
  setExtendedValue?: Dispatch<SetStateAction<any>>;
  height?: string;
};
