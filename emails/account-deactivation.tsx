import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const AccountDeactivationConfirmationEmail = () => {
  // Mock data
  const userName = "Alex";
  const reactivationPeriod = "30 days";
  const supportEmail = "support@listingpro.com";

  return (
    <Html>
      <Head />
      <Preview>Your ListingPro account has been deactivated</Preview>
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
                Account Deactivation Confirmed
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                Hello {userName},
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                We're sorry to see you go. This email confirms that your ListingPro account has been successfully deactivated.
              </Text>
              <Section className="bg-gray-800 rounded-lg p-6 mb-6">
                <Text className="text-xl text-center text-orange-500 mb-4">
                  Important Information
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  • Your account data will be retained for {reactivationPeriod}.
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  • You can reactivate your account at any time during this period.
                </Text>
                <Text className="text-base text-gray-300">
                  • After {reactivationPeriod}, your data will be permanently deleted.
                </Text>
              </Section>
              <Text className="text-lg text-gray-300 mb-6">
                If you've changed your mind or if this was a mistake, you can reactivate your account by logging in within the next {reactivationPeriod}.
              </Text>
              <Section className="text-center mb-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                  href="https://listingpro.com/login"
                >
                  Reactivate My Account
                </Button>
              </Section>
              <Text className="text-sm text-gray-400 mb-4">
                If you have any questions or concerns, please don't hesitate to contact our support team at{' '}
                <a href={`mailto:${supportEmail}`} className="text-orange-500 hover:text-orange-400">
                  {supportEmail}
                </a>.
              </Text>
              <Text className="text-sm text-gray-400 font-semibold">
                We hope to see you again soon!
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

export default AccountDeactivationConfirmationEmail;

