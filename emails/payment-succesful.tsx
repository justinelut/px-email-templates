import { Html, Head, Preview, Body, Tailwind, Text, Button, Section, Img, Container } from '@react-email/components';

export const PaymentSuccessfulEmail = () => {
  // Mock Data for Payment Success
  const paymentData = {
    name: "Alex Johnson",
    plan: "Premium Plan",
    price: "KSh 3,000",
    paymentMethod: "Credit Card (Visa)",
    nextBillingDate: "2025-01-20",
    transactionId: "TX123456789",
    planFeatures: [
      "Unlimited Property Listings",
      "Priority Customer Support",
      "Access to Premium Features",
      "Exclusive Property Insights"
    ]
  };

  return (
    <Html>
      <Head />
      <Preview>Payment Successful! Your subscription is active. See details below.</Preview>
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
              <Text className="text-4xl font-bold mb-2">Payment Successful, {paymentData.name}!</Text>
              <Text className="text-lg text-white">
                You’ve been successfully charged <strong>{paymentData.price}</strong> for the <strong>{paymentData.plan}</strong>.
              </Text>
            </Section>

            {/* Payment Summary Section */}
            <Section className="bg-gray-800 p-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                Payment Summary
              </Text>
              <Text className="text-lg text-white mb-2">
                <strong>Transaction ID:</strong> {paymentData.transactionId}
              </Text>
              <Text className="text-lg text-white mb-2">
                <strong>Payment Method:</strong> {paymentData.paymentMethod}
              </Text>
              <Text className="text-lg text-white mb-2">
                <strong>Next Billing Date:</strong> {paymentData.nextBillingDate}
              </Text>
              <Text className="text-lg text-white mb-4">
                Thank you for your payment! You're now all set for the next billing cycle.
              </Text>
            </Section>

            {/* Plan Features Section */}
            <Section className="bg-gray-700 p-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                What You Get with the {paymentData.plan}
              </Text>
              <ul className="list-disc pl-5 text-white text-lg">
                {paymentData.planFeatures.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </Section>

            {/* CTA Section */}
            <Section className="text-center p-6 bg-gradient-to-r from-orange-600 to-orange-700">
              <Button
                className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-orange-500"
                href="https://fundiwangu.com/dashboard"
              >
                Go to Your Dashboard
              </Button>
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

export default PaymentSuccessfulEmail;
