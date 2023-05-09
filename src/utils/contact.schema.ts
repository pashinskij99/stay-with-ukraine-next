import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as Yup from 'yup';

export const regExpEmail = /^(([^<>()\]\\.!#$%&’*+=?^{|}~,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const contactSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  email: Yup.string().email('Invalid email address').matches(regExpEmail, 'wrong email'),
  phone: Yup.string().required('Please enter your phone').test(
    'phone',
    'Invalid phone number',
    (value) => {
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber ? phoneNumber.isValid() : false;
    }
  ),
});
