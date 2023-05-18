import { toast } from "react-toastify";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

import { Lang } from "@/locales";
import {
  StyledButton,
  StyledButtonContainer,
  StyledInputsContainer,
} from "@/pagesStyles/Contact.styles";
import { InputsType } from "@/pagesTypes/Contact.types";

interface IFormContact {
  resetKey: number;
  initialValues: any;
  contactSchema: Yup.ObjectSchema<
    {
      firstName: string;
      email: string | undefined;
      phone: string;
    },
    Yup.AnyObject,
    {
      firstName: undefined;
      email: undefined;
      phone: undefined;
    }
  >;
  locale: Lang;
  setResetKey: React.Dispatch<React.SetStateAction<number>>;
  renderInputs: () => React.JSX.Element[];
  contact: {
    title: string;
    subtitle: string;
    buttonText: string;
    inputs: InputsType[];
  };
}

const FormContact = ({
  resetKey,
  initialValues,
  contactSchema,
  locale,
  setResetKey,
  renderInputs,
  contact,
}: IFormContact) => {
  return (
    <Formik
      key={resetKey}
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values) => {
        axios
          .post("https://admin.stay-with-ua.admiral-studios.com/api/contacts", {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            organization: values.organization,
            massage: values.message,
          })
          .then(() => {
            toast.success(
              locale === "en"
                ? "We will contact you soon"
                : "Ми з вами звʼяжемось",
              {
                autoClose: 3000,
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              }
            );
            setResetKey((prevKey) => prevKey + 1);
          })
          .catch((error) => {
            console.error(error);
            toast.error(
              locale === "en" ? "Something was wrong" : "Щось не так",
              {
                autoClose: 3000,
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              }
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
              type="submit"
            >
              {contact.buttonText}
            </StyledButton>
          </StyledButtonContainer>
        </div>
      )}
    </Formik>
  );
};

export default FormContact;
