import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section, Link } from '@react-email/components';

export const SubscriptionExpiryReminderEmail = () => {
  // Mock data
  const userName = "Alex";
  const daysLeft = 3;
  const expiryDate = "June 30, 2023";
  const currentPlan = "Pro";
  const renewalPrice = "4,999 KES";

  return (
    <Html>
      <Head />
      <Preview>Your Fundi Wangu {currentPlan} subscription is about to expire!</Preview>
      <Tailwind>
        <Body className="bg-gray-900 font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Img
              src="https://via.placeholder.com/150x50?text=Fundi+Wangu"
              width="150"
              height="50"
              alt="Fundi Wangu Logo"
              className="mx-auto mb-8"
            />
            <Section className="bg-black rounded-3xl shadow-2xl p-8 border-2 border-orange-500">
              <Text className="text-4xl font-extrabold text-center text-white mb-6">
                Time's Ticking, {userName}!
              </Text>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl transform -rotate-3"></div>
                <div className="relative bg-gray-800 rounded-2xl p-6 transform rotate-3">
                  <Text className="text-2xl font-bold text-center text-white mb-2">
                    Your {currentPlan} Plan Expires in
                  </Text>
                  <Text className="text-6xl font-extrabold text-center text-orange-500 mb-2">
                    {daysLeft} Days
                  </Text>
                  <Text className="text-lg text-center text-gray-300">
                    on {expiryDate}
                  </Text>
                </div>
              </div>
              <Text className="text-xl text-gray-300 mb-6 text-center">
                Don't lose access to these amazing features:
              </Text>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Unlimited Bookings', 'Priority Support', 'Advanced Analytics', 'Custom Branding'].map((feature, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                    <Text className="text-lg font-semibold text-orange-500">{feature}</Text>
                  </div>
                ))}
              </div>
              <Section className="text-center mb-8">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 rounded-full text-white font-bold no-underline text-center px-8 py-4 text-lg transform hover:scale-105"
                  href="https://fundiwangu.com/renew"
                >
                  Renew Now for {renewalPrice}
                </Button>
              </Section>
              <Text className="text-sm text-gray-400 mb-4 text-center">
                By renewing, you'll continue to enjoy uninterrupted access to all {currentPlan} features.
              </Text>
              <hr className="border-gray-700 mb-6" />
              <Text className="text-sm text-gray-400 mb-4">
                Need help or have questions? Our support team is here for you 24/7.
                Contact us at{' '}
                <Link href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-400">
                  support@fundiwangu.com
                </Link>
              </Text>
            </Section>
            <Text className="text-sm text-center text-gray-500 mt-8">
              © 2023 Fundi Wangu. All rights reserved.
              <br />
              <Link href="#" className="text-orange-500 hover:text-orange-400 underline">Privacy Policy</Link> • <Link href="#" className="text-orange-500 hover:text-orange-400 underline">Terms of Service</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SubscriptionExpiryReminderEmail;

