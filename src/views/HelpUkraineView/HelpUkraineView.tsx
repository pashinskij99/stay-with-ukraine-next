import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Field, FieldProps } from 'formik';
import map from 'lodash/map';

// const DynamicFormHelpUkraine = dynamic(() => import('@/components/ContactHelpUkraine').then((res) => res.default))
import {
  ExtendedMultyInput,
  ExtendedTextField,
  FilterMenu,
  FlagBlock,
  LatestNews,
  MetaLayer,
} from '@/components';
import ContactHelpUkraine from '@/components/ContactHelpUkraine' 
import {
  HelpUkraineSelectType,
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from '@/components/NewsFilters/NewsFilters.data';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import {
  StyledInputContainer,
  StyledMainContainer,
  StyledSelectContainer,
  StyledTitle,
} from '@/pagesStyles/helpUkraine.styles';
import { COLORS } from '@/utils/colors';
import {contactSchema} from "@/utils/contact.schema";

const HelpUkraineView: FC = () => {
  const locale = getLocale();
  const { contact, helpUkraine } = strings[locale];
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
          <StyledInputContainer key={`help-Ukraine-field-message`} isbig={true}>
            <Field name={input.name}>
              {({ field }: FieldProps) => (
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
          <StyledSelectContainer key={`help-Ukraine-field-organization`}>
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
      title={locale === 'en' ? 'Stay With Ukraine | How to Help Ukraine' : 'Допомогти Україні |Stay UA'}
      description={locale === 'en' ?'The organization was created with the sole purpose of helping the Ukrainian people and saving as many lives as possible through any means possible.' : 'Організація створена з єдиною метою – допомогти українському народу та врятувати якомога більше життів будь-якими можливими засобами.'}
      backgroundColor={COLORS.WHITE}
      currentPage='help-Ukraine'
      headerStyle='transparent'
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/help-Ukraine" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/help-Ukraine" />
        </>
      }
    >
      <FlagBlock
        title={locale === 'en' ? 'Help Ukraine' : 'Допоможіть Україні'}
      />
      <StyledMainContainer>
        <StyledTitle color={COLORS.BLACK} lang={locale}>
          {helpUkraine.title}
        </StyledTitle>

          <ContactHelpUkraine
            locale={locale}
            initialValues={initialValues}
            setResetKey={setResetKey}
            resetKey={resetKey}
            renderInputs={renderInputs}
            selectedItem={selectedItem}
            contactSchema={contactSchema}
            contact={contact}
            helpUkraine={helpUkraine}
          />

      </StyledMainContainer>
      <LatestNews isMainPage={false} />
    </MetaLayer>
  );
};

export default HelpUkraineView