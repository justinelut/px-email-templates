import { Html, Head, Preview, Body, Tailwind, Text, Button, Section, Img, Container } from '@react-email/components';

export const PasswordChangeConfirmationEmail = () => {
  // Mock data for password change confirmation
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    supportLink: "https://fundiwangu.com/support",
  };

  return (
    <Html>
      <Head />
      <Preview>Your password has been successfully changed! See details below.</Preview>
      <Tailwind>
        <Body className="bg-gray-900 text-white font-sans">
          {/* Main Container */}
          <Container className="mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden max-w-3xl">
            {/* Header Section */}
            <Section className="bg-gradient-to-r from-orange-500 to-orange-700 text-center p-8">
              <Img
                src="https://via.placeholder.com/150x50?text=Fundi+Wangu+Logo"
                alt="Fundi Wangu Logo"
                width="180"
                className="mx-auto mb-4"
              />
              <Text className="text-4xl font-bold mb-2">Password Changed Successfully</Text>
              <Text className="text-lg text-white">
                Hi, {userData.name}. Your password has been successfully changed for your account {userData.email}.
              </Text>
            </Section>

            {/* Confirmation Section */}
            <Section className="bg-gray-800 p-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                If this wasn't you, please contact support immediately.
              </Text>
              <Text className="text-lg text-white mb-2">
                If you didn't make this change or suspect any suspicious activity, please secure your account right away.
              </Text>
              <Text className="text-lg text-white mb-4">
                You can reset your password anytime by clicking on the link below or contacting our support team for assistance.
              </Text>
              <Button
                className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-orange-500"
                href={userData.supportLink}
              >
                Contact Support
              </Button>
            </Section>

            {/* Security Tips Section */}
            <Section className="bg-gray-700 p-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                Keep Your Account Secure
              </Text>
              <ul className="list-disc pl-5 text-white text-lg">
                <li className="mb-2">Use a strong and unique password.</li>
                <li className="mb-2">Enable two-factor authentication for added security.</li>
                <li className="mb-2">Regularly monitor your account for suspicious activity.</li>
                <li className="mb-2">Never share your login credentials with anyone.</li>
              </ul>
            </Section>

            {/* Footer Section */}
            <Section className="text-center bg-gray-900 p-6">
              <Text className="text-sm text-gray-400">
                Need help? Contact us at{" "}
                <a href={userData.supportLink} className="text-orange-400 underline">
                  Fundi Wangu Support
                </a>
                .
              </Text>
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

export default PasswordChangeConfirmationEmail;
