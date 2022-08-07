import ContactFormWithSocialButtons from '@/components/contact-section';
import PageLayout from '@/components/page-layout';
import { Error, Success } from '@/components/results';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  return (
    <PageLayout title='Contact Page' description='Contact Page'>
      <Stack>
        {error ? (
          <Error
            title='Something went wrong'
            description='Something went wrong, please, try again later.'
          />
        ) : submitted ? (
          <Success
            title='The email was sent successfully'
            description='Please, wait for me to reach out to you!'
          />
        ) : (
          <ContactFormWithSocialButtons
            setSubmitted={setSubmitted}
            setError={setError}
          />
        )}
      </Stack>
    </PageLayout>
  );
};

export default ContactPage;
