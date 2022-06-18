import { VisuallyHidden } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Button } from './motion/Button';

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

export const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <Button
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
      _hover={{
        bg: 'gray.200',
      }}
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 30,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};
