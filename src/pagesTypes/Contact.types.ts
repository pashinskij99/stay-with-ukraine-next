import { ChangeEvent, FocusEvent } from "react";

export type FieldProps = {
  field: {
    name: string;
    value: any;
    onChange: (e: ChangeEvent<any>) => void;
    onBlur: (e: FocusEvent<any>) => void;
  };
  meta: {
    touched: boolean;
    error: string;
  };
};

export enum GridNamesEn {
  FIRST_NAME = 'First name',
  LAST_NAME = 'Last name',
  EMAIL = 'Email',
  PHONE = 'Phone',
  ORGANIZATION = 'Organization',
  MESSAGE = 'Message',
}

export enum GridNamesUk {
  FIRST_NAME = 'Імʼя',
  LAST_NAME = 'Прізвище',
  EMAIL = 'Електронна пошта',
  PHONE = 'Телефон',
  ORGANIZATION = 'Організация',
  MESSAGE = 'Повідомлення',
}

export type InputsType = {
  placeholder: GridNamesEn | GridNamesUk;
  name: string
}