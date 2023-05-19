import { FC } from 'react';
import dynamic from 'next/dynamic'

const DynamicProject = dynamic(() => import('@/views/ProjectsView').then((res) => res.default), {ssr: false})

const Project: FC = () => {
  return (
    <DynamicProject />
  );
};

export default Project;
