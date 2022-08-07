import HeroSection from '@/components/hero-section';
import PageLayout from '@/components/page-layout';
import { Stack } from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <PageLayout title='Home' description='Home Page'>
      <Stack>
        <HeroSection />
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
