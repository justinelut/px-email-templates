import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const PasswordResetEmail = () => {
  // Mock data
  const resetLink = "https://listingpro.com/reset-password?token=abc123";
  const expirationTime = "1 hour";

  return (
    <Html>
      <Head />
      <Preview>Reset your ListingPro password</Preview>
      <Tailwind>
        <Body className="bg-black font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Img
              src="https://via.placeholder.com/150x50?text=ListingPro"
              width="150"
              height="50"
              alt="ListingPro Logo"
              className="mx-auto mb-8"
            />
            <Section className="bg-gray-900 rounded-xl shadow-lg p-8">
              <Text className="text-3xl font-extrabold text-center text-white mb-6">
                Password Reset Request
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                We received a request to reset your ListingPro password. If you didn't make this request, you can safely ignore this email.
              </Text>
              <Section className="bg-gray-800 rounded-lg p-6 mb-6">
                <Text className="text-xl text-center text-orange-500 mb-2">
                  To reset your password, click the button below:
                </Text>
                <Section className="text-center">
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                    href={resetLink}
                  >
                    Reset My Password
                  </Button>
                </Section>
              </Section>
              <Text className="text-sm text-gray-400 mb-6">
                This password reset link will expire in <span className="font-semibold text-white">{expirationTime}</span>. If you need to reset your password after that, please request a new reset link.
              </Text>
              <Text className="text-sm text-gray-400 mb-4">
                If you're having trouble clicking the password reset button, copy and paste the URL below into your web browser:
              </Text>
              <Text className="text-xs text-orange-500 break-all mb-6">
                {resetLink}
              </Text>
              <Text className="text-sm text-gray-400 font-semibold">
                For security reasons, please do not forward this email to anyone.
              </Text>
            </Section>
            <Text className="text-sm text-center text-gray-500 mt-8">
              © 2023 ListingPro. All rights reserved.
              <br />
              <a href="#" className="text-orange-500 hover:text-orange-400 underline">Privacy Policy</a> • <a href="#" className="text-orange-500 hover:text-orange-400 underline">Terms of Service</a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;

