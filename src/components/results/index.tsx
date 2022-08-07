import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Success = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box textAlign='center' py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as='h2' size='xl' mt={6} mb={2}>
        {title}
      </Heading>
      <Text mb={4} color={'gray.500'}>{description}</Text>
      <NextLink href='/' passHref>
        <Button colorScheme='brand' size='md'>
          Return to home
        </Button>
      </NextLink>
    </Box>
  );
};

export const Error = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box textAlign='center' py={10} px={6}>
      <Box display='inline-block'>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign='center'
        >
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as='h2' size='xl' mt={6} mb={2}>
        {title}
      </Heading>
      <Text mb={4} color={'gray.500'}>{description}</Text>
      <NextLink href='/' passHref>
        <Button colorScheme='brand' size='md'>
          Return to home
        </Button>
      </NextLink>
    </Box>
  );
};
