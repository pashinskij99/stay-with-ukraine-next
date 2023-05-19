import { ChangeEvent, FocusEvent } from "react";

export type ExtendedMultyInputProps = {
  placeholder: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string;
}