import { Container, Section } from '@react-email/components';
import { EmailHeader } from './header';
import { EmailFooter } from './footer';

export const EmailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container style={container}>
      <EmailHeader />
      <Section style={content}>
        {children}
      </Section>
      <EmailFooter />
    </Container>
  );
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
};

const content = {
  padding: '20px',
};

