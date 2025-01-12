import { Html, Head, Preview, Body, Tailwind, Text, Button, Section, Container, Img } from '@react-email/components';

export const VerificationCodeEmailTemplate = () => {
  // Mock data
  const verificationCodeData = {
    name: "Alex Johnson",
    verificationCode: "123456",
    supportLink: "https://fundiwangu.com/support",
    logo: "https://via.placeholder.com/150x50?text=Fundi+Wangu+Logo",
  };

  return (
    <Html>
      <Head />
      <Preview>Your 6-Digit Verification Code for Fundi Wangu</Preview>
      <Tailwind>
        <Body className="bg-gray-900 text-white font-sans">
          {/* Main Container */}
          <Container className="mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden max-w-xl">
            {/* Gradient Header */}
            <Section className="bg-gradient-to-r from-orange-500 to-orange-700 text-center p-8">
              <Img
                src={verificationCodeData.logo}
                alt="Fundi Wangu Logo"
                width="180"
                className="mx-auto mb-4"
              />
              <Text className="text-4xl font-bold text-white mb-2">Hello, {verificationCodeData.name}!</Text>
              <Text className="text-lg text-white">
                We received a request to verify your identity on Fundi Wangu. Below is your 6-digit verification code.
              </Text>
            </Section>

            {/* Verification Code Section */}
            <Section className="bg-gradient-to-b from-gray-800 to-gray-900 p-6">
              <Text className="text-2xl font-bold mb-4 text-orange-400 text-center">
                Your 6-Digit Verification Code
              </Text>
              <Section className="text-center">
                {/* Big Verification Code */}
                <Text className="text-5xl font-bold text-white mb-6">
                  {verificationCodeData.verificationCode}
                </Text>
              </Section>
              <Text className="text-lg text-gray-300 text-center mb-6">
                Enter this code on the verification page to complete your process.
              </Text>

              {/* Call-to-Action Button */}
              <Section className="text-center mb-6">
                <Button
                  className="bg-orange-600 px-4 py-3 rounded-full text-white font-bold text-lg shadow-md hover:bg-orange-500"
                  href="https://fundiwangu.com/verify"
                >
                  Verify Now
                </Button>
              </Section>
            </Section>

            {/* Additional Info Section */}
            <Section className="bg-gray-800 p-6 rounded-b-lg">
              <Text className="text-center text-gray-300 mb-4">
                If you didn't request this verification, please ignore this email. Your security is our priority.
              </Text>
              <Text className="text-center text-sm text-gray-400">
                Need assistance? Visit our{" "}
                <a href={verificationCodeData.supportLink} className="text-orange-400 underline">
                  support page
                </a>.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center bg-gray-900 p-6">
              <Text className="text-gray-600 mt-2 text-xs">
                © {new Date().getFullYear()} Fundi Wangu. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationCodeEmailTemplate;
