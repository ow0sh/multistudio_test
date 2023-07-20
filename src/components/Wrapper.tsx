import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="xl:mx-[200px] md:mx-[10px]">{children}</div>;
};

export default Wrapper;
