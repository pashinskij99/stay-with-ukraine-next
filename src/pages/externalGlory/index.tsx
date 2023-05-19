import { FC } from "react";
import dynamic from 'next/dynamic'

const DynamicExternalGlory = dynamic(() => import('@/views/ExternalGloryView').then((res) => res.default), {ssr: false})

const ExternalGlory: FC = () => {
  return (
    <DynamicExternalGlory />
  );
};

export default ExternalGlory;
