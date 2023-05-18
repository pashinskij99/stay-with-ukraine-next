import React, { useState } from "react";
import { Field, FieldProps } from "formik";
import { map } from "lodash";
import dynamic from "next/dynamic";

import {
  ExtendedMultyInput,
  ExtendedTextField,
  FlagBlock,
  LatestNews,
  MetaLayer,
} from "@/components";
import { TEXT_PRESETS } from "@/components/ExtendedText/ExtendedText.types";
import useWindowDimensions from "@/hooks/useWindowDimension";
import strings, { getLocale } from "@/locales";
import { COLORS } from "@/utils/colors";
import { contactSchema } from "@/utils/contact.schema";

import {
  StyledInputContainer,
  StyledMainContainer,
  StyledSubtitle,
  StyledTitle
} from "../../pagesStyles/Contact.styles";

const DynamicFormContact = dynamic(() =>
  import("@/components/FormContact").then((res) => res.default)
);

const Contact: React.FC = () => {
  const locale = getLocale();
  const { contact } = strings[locale];
  const [mounted, setMounted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const { width } = useWindowDimensions();
  const screenWidthCheck = width && width < 500;

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
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
      if (input.name === "message") {
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
      );
    });

  return (
    <MetaLayer
      title={locale === "en" ? "Contact Us | Stay UA" : "Контакти | Stay UA"}
      description={
        locale === "en"
          ? "Get in touch with Stay With Ukraine organization."
          : "Контакти для зв'язку з організацією Stay With Ukraine."
      }
      backgroundColor={COLORS.WHITE}
      currentPage="contact"
      headerStyle="transparent"
      headChildren={
        <>
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.stayua.com/contact"
          />
          <link
            rel="alternate"
            hrefLang="uk"
            href="https://www.stayua.com/uk/contact"
          />
        </>
      }
    >
      <FlagBlock title={locale === "en" ? "Contact Us" : "Контакти"} />
      <StyledMainContainer>
        <StyledTitle color={COLORS.BLACK} lang={locale}>
          {contact.title}
        </StyledTitle>
        <StyledSubtitle preset={TEXT_PRESETS.REG_33}>
          {contact.subtitle}
        </StyledSubtitle>

        <DynamicFormContact
          contact={contact}
          contactSchema={contactSchema}
          initialValues={initialValues}
          locale={locale}
          renderInputs={renderInputs}
          resetKey={resetKey}
          setResetKey={setResetKey}
        />
      </StyledMainContainer>
      <LatestNews isMainPage={false} />
    </MetaLayer>
  );
};

export default Contact;
