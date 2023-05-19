import { FC } from 'react';
import dynamic from 'next/dynamic'

const DynamicAboutUs = dynamic(() => import('@/views/AboutUsView').then((res) => res.default), {ssr: false})

const AboutUs: FC = () => {
  return (
    <DynamicAboutUs />
  );
};

export default AboutUs;
