import { FC } from "react";
import dynamic from 'next/dynamic'

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from "@/locales";


const DynamicContactContent = dynamic(() => import('@/views/ContactView').then((res) => res.default), {ssr: false})

const Contact: FC = () => {
  const locale = getLocale();

  return (
    <>
      <Meta
        title={locale === "en" ? "Contact Us | Stay UA" : "Контакти | Stay UA"}
        description={
          locale === "en"
            ? "Get in touch with Stay With Ukraine organization."
            : "Контакти для зв'язку з організацією Stay With Ukraine."
        }
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
      />

      <DynamicContactContent />
    </>
  );
};

export default Contact;
