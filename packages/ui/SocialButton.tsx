import { chakra, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

export const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <chakra.button
      bg={'white'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'gray.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
