import { FC, useState } from "react";
import map from "lodash/map";

import {
  FlagBlock,
  LatestNews,
  MetaLayer,
} from "@/components";
import {ContactUsField1, ContactUsField2} from '@/components/ContactUsFields'
import { TEXT_PRESETS } from "@/components/ExtendedText/ExtendedText.types";
import FormContact from '@/components/FormContact'
import strings, { getLocale } from "@/locales";
import {
  StyledMainContainer,
  StyledSubtitle,
  StyledTitle
} from "@/pagesStyles/Contact.styles";
import { COLORS } from "@/utils/colors";
import { contactSchema } from "@/utils/contact.schema";

const ContactView: FC = () => {
  const locale = getLocale();
  const { contact } = strings[locale];
  const [resetKey, setResetKey] = useState(0);

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
          <ContactUsField2 input={input} />
        );
      }
      return (
        <ContactUsField1 input={input} />
      );
    });

  return (
    <MetaLayer
      backgroundColor={COLORS.WHITE}
      currentPage="contact"
      headerStyle="transparent"
    >
      <>
        <FlagBlock title={locale === "en" ? "Contact Us" : "Контакти"} />
        <StyledMainContainer>
          <StyledTitle color={COLORS.BLACK} lang={locale}>
            {contact.title}
          </StyledTitle>
          <StyledSubtitle preset={TEXT_PRESETS.REG_33}>
            {contact.subtitle}
          </StyledSubtitle>

          <FormContact
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
      </>
    </MetaLayer>
  );
};

export default ContactView