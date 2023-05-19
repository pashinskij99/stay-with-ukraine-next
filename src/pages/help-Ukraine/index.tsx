import { FC } from "react";
import dynamic from 'next/dynamic'

const DynamicHelpUkraineContent = dynamic(() => import('@/views/HelpUkraineView').then((res) => res.default), {ssr: false})

const HelpUkraine: FC = () => {
  return (
    <DynamicHelpUkraineContent />
  );
};

export default HelpUkraine;
