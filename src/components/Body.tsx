import { FC, PropsWithChildren } from 'react';

const Body: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Body;
