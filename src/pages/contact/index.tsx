import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Field, FieldProps, Formik } from 'formik';
import { map } from 'lodash';

import {
  ExtendedMultyInput,
  ExtendedTextField,
  FlagBlock,
  LatestNews,
  Map,
  MetaLayer,
} from '@/components';
import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';
import { contactSchema } from '@/utils/contact.schema';

import {
  StyledButton,
  StyledButtonContainer,
  StyledInputContainer,
  StyledInputsContainer,
  StyledMainContainer,
  StyledSubtitle,
  StyledTitle,
} from '../../pagesStyles/Contact.styles';

const Contact: React.FC = () => {
  const locale = getLocale();
  const { contact } = strings[locale];
  const [mounted, setMounted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const { width } = useWindowDimensions();
  const screenWidthCheck = width && width < 500;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  };


  //TODO: uncomment if there are errors
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  const renderInputs = () =>
    map(contact.inputs, (input) => {
      if (input.name === 'message') {
        return (
          <StyledInputContainer key={`contact-us-field-message`} isbig={true}>
            <Field name={input.name}>
              {({ field, meta }: FieldProps) => (
                <ExtendedMultyInput
                  placeholder={input.placeholder}
                  {...field}
                />
              )}
            </Field>
          </StyledInputContainer>
        );
      }
      return (
        <StyledInputContainer
          key={`contact-us-field-${input.placeholder}`}
          isbig={input.name === 'organization' ? true : false}
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
      );
    });

  return (
    <MetaLayer
      title={locale === 'en' ? 'Contact Us | Stay UA' : 'Контакти | Stay UA'}
      description={locale === 'en' ? 'Get in touch with Stay With Ukraine organization.' : "Контакти для зв'язку з організацією Stay With Ukraine."}
      backgroundColor={COLORS.WHITE}
      currentPage='contact'
      headerStyle='transparent'
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/contact" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/contact" />
        </>
      }
    >
      <FlagBlock title={locale === 'en' ? 'Contact Us' : 'Контакти'} />
      <StyledMainContainer>
        <StyledTitle color={COLORS.BLACK} lang={locale}>
          {contact.title}
        </StyledTitle>
        <StyledSubtitle preset={TEXT_PRESETS.REG_33}>{contact.subtitle}</StyledSubtitle>
        <Formik
          key={resetKey}
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post(
                'https://admin.stay-with-ua.admiral-studios.com/api/contacts',
                {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  phone: values.phone,
                  organization: values.organization,
                  massage: values.message,
                },
              )
              .then((response) => {
                toast.success(
                  locale === 'en'
                    ? 'We will contact you soon'
                    : 'Ми з вами звʼяжемось',
                  {
                    autoClose: 3000,
                    position: 'top-right',
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                  },
                );
                setResetKey((prevKey) => prevKey + 1);
              })
              .catch((error) => {
                console.error(error);
                toast.error(
                  locale === 'en'
                    ? 'Something was wrong'
                    : 'Щось не так',
                  {
                    autoClose: 3000,
                    position: 'top-right',
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                  },
                );
              });
            setResetKey((prevKey) => prevKey + 1);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <div>
              <StyledInputsContainer>{renderInputs()}</StyledInputsContainer>
              <StyledButtonContainer>
                <StyledButton
                  onClick={() => handleSubmit()}
                  disabled={Object.keys(errors).length > 0}
                  isDisabled={Object.keys(errors).length > 0 || !touched}
                  type='submit'
                >
                  {contact.buttonText}
                </StyledButton>
              </StyledButtonContainer>
            </div>
          )}
        </Formik>
      </StyledMainContainer>
      <LatestNews isMainPage={false} />
    </MetaLayer>
  );
};

export default Contact;
