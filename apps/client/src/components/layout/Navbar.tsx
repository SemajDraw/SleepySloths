import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Center,
  Text,
} from '@chakra-ui/react';
import { Props } from '../../interfaces/component';
import { DarkModeSwitch } from 'ui';
import { truncateAddress } from '../../utils/string.utils';

interface NavLinkProps extends Props {
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={href}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const account = false;
  const connectWallet = () => window.alert('Shit');
  return (
    <Box
      as={'header'}
      position={'fixed'}
      width={'100%'}
      bg={'transparent'}
      px={4}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <NavLink href={'/'}>
            <Text
              color={'purple.300'}
              as={'i'}
              fontSize={'2xl'}
              fontWeight={700}
            >
              EthDex
            </Text>
          </NavLink>
        </Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <DarkModeSwitch />
            {account ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={`data:image/png;base64,${generateIdenticon(
                      account,
                      32
                    )}`}
                  />
                </MenuButton>
                <MenuList maxWidth={'200px'} alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={`data:image/png;base64,${generateIdenticon(
                        account,
                        32
                      )}`}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text>{truncateAddress(account)}</Text>
                  </Center>
                </MenuList>
              </Menu>
            ) : (
              <Button
                mt={2}
                bg={account ? 'purple.300' : 'purple.200'}
                _hover={{ bg: account ? 'purple.200' : 'purple.100' }}
                color={'white'}
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
