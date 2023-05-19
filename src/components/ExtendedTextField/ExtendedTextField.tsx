import { ChangeEvent, FC, FocusEvent,FormEvent, useState } from 'react';

import { getLocale } from '@/locales';

import { ExtendedButton } from '../ExtendedButton';

import {
  StyledButtonContainer,
  StyledErrorContainer,
  StyledErrorText,
  StyledForm,
  StyledInput,
} from './ExtendedTextField.styles';
import { ExtendedTextFieldType } from './ExtendedTextField.types';

export const ExtendedTextField: FC<ExtendedTextFieldType> = ({
  height,
  placeholder,
  buttonText,
  buttonIcon,
  error,
  name,
  onChange,
  onBlur,
  value,
  buttonAction,
  setExtendedValue,
}) => {
  const [text, setText] = useState(value || '');
  const locale = getLocale();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setExtendedValue) setExtendedValue(event.target.value);
    setText(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //! TODO: Add correct function
  };

  return (
    <StyledForm height={height} onSubmit={handleSubmit}>
      <StyledInput
        autoComplete='off'
        type='text'
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        name={name}
      />
      {buttonText && (
        <StyledButtonContainer
          lang={locale}
          onClick={() => buttonAction && buttonAction()}
        >
          <ExtendedButton preset='inputTextButton' title={buttonText} />
        </StyledButtonContainer>
      )}
      {buttonIcon && (
        <StyledButtonContainer
          isIcon={!!buttonIcon}
          lang={locale}
          onClick={() => buttonAction && buttonAction()}
        >
          <ExtendedButton preset='inputIconButton' icon={buttonIcon} />
        </StyledButtonContainer>
      )}
      {error && (
        <StyledErrorContainer>
          <StyledErrorText>{error}</StyledErrorText>
        </StyledErrorContainer>
      )}
    </StyledForm>
  );
};
