import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-[200px]">{children}</div>;
};

export default Wrapper;
