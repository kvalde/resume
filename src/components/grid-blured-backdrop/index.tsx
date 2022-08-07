import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExperienceCard } from '../experience-card';

const GridBlurredBackdrop = ({ experience }) => {
  return (
    <Flex
      textAlign={'center'}
      py={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Experience
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'80%'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          Discover my development experience on this page
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}
      >
        {experience.map((cardInfo, index) => (
          <ExperienceCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default GridBlurredBackdrop;
