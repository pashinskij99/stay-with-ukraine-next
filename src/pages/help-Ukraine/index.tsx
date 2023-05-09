import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Field, FieldProps, Formik } from 'formik';
import { map } from 'lodash';

import {
  ExtendedMultyInput,
  ExtendedTextField,
  FilterMenu,
  FlagBlock,
  LatestNews,
  MetaLayer,
} from '@/components';
import {
  HelpUkraineSelectType,
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from '@/components/NewsFilters/NewsFilters.data';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import {
  StyledButton,
  StyledButtonContainer,
  StyledInputContainer,
  StyledInputsContainer,
  StyledMainContainer,
  StyledSelectContainer,
  StyledTitle,
} from '../../pagesStyles/helpUkraine.styles';
import { helpUkraineSchema } from '../../utils/helpUkraine.schema';

const HelpUkraine: React.FC = () => {
  const locale = getLocale();
  const { contact, helpUkraine } = strings[locale];
  const [mounted, setMounted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const { width } = useWindowDimensions();
  const [selectedItem, setSelectedItem] = useState<HelpUkraineSelectType>(
    helpUkraine.selectItems[0],
  );
  const screenWidthCheck = width && width < 500;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    support: '',
    message: '',
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderInputs = () =>
    map(contact.inputs, (input) => {
      if (input.name === 'message') {
        return (
          <StyledInputContainer key={`help-Ukraine-field-message`} isbig={true}>
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
      if (input.name === 'organization')
        return (
          <StyledSelectContainer>
            <FilterMenu
              isInNews={false}
              items={helpUkraine.selectItems}
              state={selectedItem}
              setState={
                setSelectedItem as Dispatch<
                  SetStateAction<
                    | NewsFilterTopicType
                    | NewsFilterTagType
                    | NewsFilterProjectType
                    | NewsFilterFormatType
                    | HelpUkraineSelectType
                  >
                >
              }
              isCapitalize={true}
            />
          </StyledSelectContainer>
        );
      return (
        <StyledInputContainer
          key={`help-Ukraine-field-${input.placeholder}`}
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
      title='Stay with Ukraine | Help Ukraine'
      description='Help Ukraine'
      backgroundColor={COLORS.WHITE}
      currentPage='help-Ukraine'
      headerStyle='transparent'
    >
      <FlagBlock
        title={locale === 'en' ? 'Help Ukraine' : 'Допоможіть Україні'}
      />
      <StyledMainContainer>
        <StyledTitle color={COLORS.BLACK} lang={locale}>
          {helpUkraine.title}
        </StyledTitle>
        <Formik
          key={resetKey}
          initialValues={initialValues}
          validationSchema={helpUkraineSchema}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post(
                'https://admin.stay-with-ua.admiral-studios.com/api/helps',
                {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  phone: values.phone,
                  support:
                    selectedItem !== helpUkraine.selectItems[0]
                      ? selectedItem.id
                      : '',
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
                  locale === 'en' ? 'Something was wrong' : 'Щось не так',
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

export default HelpUkraine;
