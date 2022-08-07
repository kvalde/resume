import GridBlurredBackdrop from '@/components/grid-blured-backdrop';
import PageLayout from '@/components/page-layout';
import { Stack } from '@chakra-ui/react';
import { experience } from 'src/constants';

const ExperiencePage = () => {
  return (
    <PageLayout title='Experience page' description='Experience page'>
      <Stack>
        <GridBlurredBackdrop experience={experience} />
      </Stack>
    </PageLayout>
  );
};

export default ExperiencePage;
