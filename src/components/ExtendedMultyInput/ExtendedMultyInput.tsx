import { ChangeEvent, FC, FocusEvent, FormEvent,useState } from 'react';

import { StyledMultyForm, StyledMultyInput } from './ExtendedMultyInput.styles';
import { ExtendedMultyInputProps } from './ExtendedMultyInput.types';

export const ExtendedMultyInput: FC<ExtendedMultyInputProps> = ({
  placeholder,
  name,
  onChange,
  onBlur,
  value,
}) => {
  const [text, setText] = useState(value || '');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (onChange) {
      //@ts-ignore
      onChange(event);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      //@ts-ignore
      onBlur(event);
    }
  };

  const handleSubmit = (event: FormEvent) => {
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
