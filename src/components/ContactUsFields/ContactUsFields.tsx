import { Field, FieldProps } from "formik";

import {
  ExtendedMultyInput,
  ExtendedTextField,
} from "@/components";
import useWindowDimensions from '@/hooks/useWindowDimension';
import {
  StyledInputContainer,
} from "@/pagesStyles/Contact.styles";

import { IInputElement } from './ContactUsFields.types';

const ContactUsField1 = ({input}: IInputElement) => {
  const { width } = useWindowDimensions();

  const screenWidthCheck = width && width < 500;
  return (
    <StyledInputContainer
        key={`contact-us-field-${input.placeholder}`}
        isbig={input.name === "organization" ? true : false}
        issmallscreen={screenWidthCheck}
      >
        <Field name={input.name}>
          {({ field, meta }: FieldProps) => (
            <ExtendedTextField
              placeholder={input.placeholder}
              {...field}
              error={meta.error}
            />
          )}
        </Field>
      </StyledInputContainer>
  )
}

const ContactUsField2 = ({input}: IInputElement) => {
  return (
    <StyledInputContainer key='contact-us-field-message' isbig={true}>
      <Field name={input.name}>
        {({ field, meta }: FieldProps) => (
          <ExtendedMultyInput
            placeholder={input.placeholder}
            {...field}
          />
        )}
      </Field>
    </StyledInputContainer>
  )
}

export {ContactUsField1, ContactUsField2}