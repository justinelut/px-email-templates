import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const AccountReactivationEmail = () => {
  // Mock data
  const userName = "Alex";
  const reactivationDate = "June 15, 2023";
  const supportEmail = "support@listingpro.com";

  return (
    <Html>
      <Head />
      <Preview>Welcome back! Your ListingPro account has been reactivated</Preview>
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
                Your Account is Reactivated!
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                Welcome back, {userName}!
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                We're excited to inform you that your ListingPro account has been successfully reactivated on {reactivationDate}. You now have full access to all features and services.
              </Text>
              <Section className="bg-gray-800 rounded-lg p-6 mb-6">
                <Text className="text-xl text-center text-orange-500 mb-4">
                  What's Next?
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  1. Log in to your account
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  2. Review and update your profile information
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  3. Check out any new features or listings
                </Text>
                <Text className="text-base text-gray-300">
                  4. Start engaging with the ListingPro community again!
                </Text>
              </Section>
              <Section className="text-center mb-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                  href="https://listingpro.com/login"
                >
                  Log In Now
                </Button>
              </Section>
              <Text className="text-lg text-gray-300 mb-6">
                If you have any questions about your account or need assistance, our support team is here to help.
              </Text>
              <Text className="text-sm text-gray-400 mb-4">
                Contact us at{' '}
                <a href={`mailto:${supportEmail}`} className="text-orange-500 hover:text-orange-400">
                  {supportEmail}
                </a>
              </Text>
              <Text className="text-sm text-gray-400 font-semibold">
                We're glad to have you back in the ListingPro community!
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

export default AccountReactivationEmail;

