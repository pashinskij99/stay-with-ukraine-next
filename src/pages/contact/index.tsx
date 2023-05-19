import { FC } from "react";
import dynamic from 'next/dynamic'

const DynamicContactContent = dynamic(() => import('@/views/ContactView').then((res) => res.default), {ssr: false})

const Contact: FC = () => {
  return (
    <DynamicContactContent />
  );
};

export default Contact;
