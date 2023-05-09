import { Dispatch, SetStateAction } from 'react';

export type ExtendedTextFieldType = {
  placeholder: string;
  buttonText?: string;
  buttonIcon?: string;
  error?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  buttonAction?: any;
  setExtendedValue?: Dispatch<SetStateAction<any>>;
  height?: string;
};
