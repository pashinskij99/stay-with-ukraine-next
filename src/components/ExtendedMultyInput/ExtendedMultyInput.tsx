import { useState } from 'react';

import { StyledMultyForm, StyledMultyInput } from './ExtendedMultyInput.styles';
import { ExtendedMultyInputProps } from './ExtendedMultyInput.types';

export const ExtendedMultyInput: React.FC<ExtendedMultyInputProps> = ({
  placeholder,
  name,
  onChange,
  onBlur,
  value,
}) => {
  const [text, setText] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (onChange) {
      //@ts-ignore
      onChange(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      //@ts-ignore
      onBlur(event);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <StyledMultyForm onSubmit={handleSubmit}>
      <StyledMultyInput
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${placeholder}...`}
        name={name}
      />
    </StyledMultyForm>
  );
};
