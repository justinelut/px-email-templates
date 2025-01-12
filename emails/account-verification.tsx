import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const AccountVerificationCodeEmail: React.FC = () => {
  const user = {
    email: "example@domain.com",
  };

  const emails = {
    otpSession: {
      body: "Your verification code is below. Please use it to verify your account.",
      footer: "If you have any questions, contact our support team.",
    },
  };

  const redirect = "https://example.com/verify";
  const project = {
    name: "ProjectName",
    logo: "https://example.com/logo.png",
  };
  const verificationCode = "123456";
  const expirationTime = "10 minutes";

  return (
    <Html>
      <Head />
      <Preview>Verify your {project.name} account</Preview>
      <Tailwind>
        <Body className="bg-gray-900 font-sans">
          <Container className="max-w-xl mx-auto py-8">
            <Img
              src={project.logo}
              width="150"
              height="50"
              alt={`${project.name} Logo`}
              className="mx-auto mb-8"
            />
            <Section className="bg-gray-800 rounded-xl shadow-lg p-8">
              <Text className="text-3xl font-extrabold text-center text-white mb-6">
                Verify Your Account
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                {emails.otpSession.body}
              </Text>
              <Section className="bg-orange-50 rounded-lg p-6 mb-6">
                <Text className="text-3xl font-bold text-center text-orange-600 tracking-widest">
                {emails.otpSession.body}
                </Text>
              </Section>
              <Text className="text-sm text-gray-400 mb-6">
                This code will expire in <span className="font-semibold text-white">{expirationTime}</span>. If you don't use it within this time, you'll need to request a new one.
              </Text>
              <Section className="text-center mb-6">
                <Button
                  className="bg-orange-600 hover:bg-orange-700 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                  href={redirect}
                >
                  Verify My Account
                </Button>
              </Section>
              <Text className="text-sm text-gray-400 mb-4">
                If you didn't request this verification, please ignore this email or contact our support team if you have any concerns.
              </Text>
              <Text className="text-sm text-gray-400 font-semibold">
                {emails.otpSession.footer}
              </Text>
            </Section>
            <Text className="text-sm text-center text-gray-400 mt-8">
              © {new Date().getFullYear()} {project.name}. All rights reserved.
              <br />
              <a href="#" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a> • <a href="#" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AccountVerificationCodeEmail;
