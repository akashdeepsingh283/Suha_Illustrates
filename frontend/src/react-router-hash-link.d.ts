declare module 'react-router-hash-link' {
  import { FC, ReactNode } from 'react';
  import { LinkProps } from 'react-router-dom';

  interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    children?: ReactNode;
  }

  export const HashLink: FC<HashLinkProps>;
}
