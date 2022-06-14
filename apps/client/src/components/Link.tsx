import React from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface LinkProps extends ChakraLinkProps {
  href: string;
}

export const Link = ({ href, children, ...props }: LinkProps) => {
  if (props.isExternal) {
    return (
      <ChakraLink position="relative" href={href} {...props}>
        {children}
      </ChakraLink>
    );
  }

  return (
    <NextLink href={href}>
      <ChakraLink position="relative" {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
