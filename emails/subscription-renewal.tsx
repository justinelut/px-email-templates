import { Html, Head, Preview, Body, Tailwind, Text, Button, Section, Img, Container } from '@react-email/components';

export const SubscriptionExpiryReminderEmail = () => {
  // Mock Data for Subscription Plans
  const userData = {
    name: "Alex Johnson",
    currentPlan: "Standard Plan",
    expiryDate: "2024-12-20",
    currentListings: 12,
  };

  const plans = [
    {
      id: 1,
      name: "Standard Plan",
      price: "KSh 1,500/month",
      listings: 15,
      features: [
        "Post service listings",
        "Save favorite listings",
        "Contact agents directly",
      ],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "KSh 3,000/month",
      listings: 30,
      features: [
        "All Standard Plan features",
        "Priority support",
        "Advanced analytics",
        "Unlimited listings",
      ],
    },
    {
      id: 3,
      name: "Advanced Plan",
      price: "KSh 5,000/month",
      listings: 50,
      features: [
        "All Premium Plan features",
        "Exclusive advertising options",
        "Featured listings",
        "Dedicated account manager",
      ],
    },
  ];

  const currentPlanDetails = plans.find(plan => plan.name === userData.currentPlan);

  return (
    <Html>
      <Head />
      <Preview>Subscription Expiry Reminder: Renew Your Plan Today!</Preview>
      <Tailwind>
        <Body className="bg-gray-900 text-white font-sans">
          {/* Main Container */}
          <Container className="mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden max-w-3xl">
            {/* Header Section */}
            <Section className="bg-gradient-to-r from-orange-500 to-orange-700 text-center p-8">
              <Text className="text-4xl font-bold mb-2">Hello, {userData.name}!</Text>
              <Text className="text-lg text-white">
                Your subscription is about to expire on <strong>{userData.expiryDate}</strong>.
                Renew today to keep enjoying your service listings and exclusive features.
              </Text>
            </Section>

            {/* Current Subscription Info */}
            <Section className="bg-gray-800 p-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                Your Current Subscription
              </Text>
              <Text className="text-lg text-white mb-2 text-center">
                <strong>{currentPlanDetails.name}</strong>
              </Text>
              <Text className="text-sm text-gray-400 mb-6 text-center">
                Expiring on {userData.expiryDate}
              </Text>
            </Section>

            {/* Available Subscription Plans */}
            <Section className="bg-gray-800 p-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                Choose a Plan that Suits You
              </Text>
              <div className="grid grid-cols-1 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-lg bg-gray-700 p-6 shadow-md text-center"
                  >
                    <Text className="text-2xl font-bold text-orange-400 mb-2">{plan.name}</Text>
                    <Text className="text-xl font-semibold text-white mb-4">{plan.price}</Text>
                    <ul className="text-left text-gray-300 mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <span className="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-orange-500"
                      href="https://fundiwangu.com/subscribe"
                    >
                      Subscribe Now
                    </Button>
                  </div>
                ))}
              </div>
            </Section>

            {/* Footer */}
            <Section className="text-center bg-gray-900 p-6">
              <Text className="text-sm text-gray-400">
                Need help? Contact us at{" "}
                <a href="https://fundiwangu.com/support" className="text-orange-400 underline">
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

export default SubscriptionExpiryReminderEmail;
