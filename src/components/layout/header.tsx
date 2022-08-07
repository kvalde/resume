import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import ThemeButton from '../theme-button';

const links = ['Experience', 'Contact'];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    textColor='white'
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('purple.200', 'gray.700')
    }}
    href={href}
  >
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as='header' bgGradient={useColorModeValue('linear(to-r, purple.300, purple.200, purple.100)', 'gray.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink href='/'>Home</NavLink>
              {links.map((link) => (
                <NavLink href={link.toLowerCase()} key={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}></Flex>
          <ThemeButton />
        </Flex>

        <Collapse animateOpacity in={isOpen}>
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href='/'>Home</NavLink>
              {links.map((link) => (
                <NavLink href={link.toLowerCase()} key={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Header;
