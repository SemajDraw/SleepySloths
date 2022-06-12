import { Stack, StackDirection } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialButton } from 'ui';

interface SocialButtonStackProps {
  direction: StackDirection;
  spacing: number;
}

export const SocialButtonStack = ({
  direction,
  spacing,
}: SocialButtonStackProps) => {
  return (
    <Stack direction={direction} spacing={spacing}>
      <SocialButton label={'Twitter'} href={'#'}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={'YouTube'} href={'#'}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram />
      </SocialButton>
    </Stack>
  );
};
