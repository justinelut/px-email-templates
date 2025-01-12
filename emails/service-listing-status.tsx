import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const ServiceListingStatusUpdateEmail = () => {
  // Mock data
  const userName = "John";
  const serviceName = "Plumbing Repair";
  const serviceStatus = "Approved";
  const listingUrl = "https://fundiwangu.com/services/plumbing-repair";

  return (
    <Html>
      <Head />
      <Preview>Your Fundi Wangu service listing has been updated</Preview>
      <Tailwind>
        <Body className="bg-black font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Img
              src="https://via.placeholder.com/150x50?text=Fundi+Wangu"
              width="150"
              height="50"
              alt="Fundi Wangu Logo"
              className="mx-auto mb-8"
            />
            <Section className="bg-gray-900 rounded-xl shadow-lg p-8">
              <Text className="text-3xl font-extrabold text-center text-white mb-6">
                Service Listing Update
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                Hello {userName},
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                We're writing to inform you about an update to your service listing on Fundi Wangu.
              </Text>
              <Section className="bg-gray-800 rounded-lg p-6 mb-6">
                <Text className="text-xl text-center text-orange-500 mb-4">
                  Listing Details
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Service:</span> {serviceName}
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Status:</span> {' '}
                  <span className="text-green-400 font-semibold">{serviceStatus}</span>
                </Text>
              </Section>
              <Text className="text-lg text-gray-300 mb-6">
                Your service listing has been {serviceStatus.toLowerCase()}. It is now visible to potential clients on our platform.
              </Text>
              <Section className="text-center mb-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                  href={listingUrl}
                >
                  View Your Listing
                </Button>
              </Section>
              <Text className="text-lg text-gray-300 mb-6">
                Remember to keep your listing up to date with your latest availability, pricing, and any special offers. This will help you attract more clients and grow your business with Fundi Wangu.
              </Text>
              <Text className="text-sm text-gray-400 mb-4">
                If you have any questions or need to make changes to your listing, please don't hesitate to contact our support team at{' '}
                <a href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-400">
                  support@fundiwangu.com
                </a>.
              </Text>
              <Text className="text-sm text-gray-400 font-semibold">
                Thank you for being a valued service provider on Fundi Wangu!
              </Text>
            </Section>
            <Text className="text-sm text-center text-gray-500 mt-8">
              © 2023 Fundi Wangu. All rights reserved.
              <br />
              <a href="#" className="text-orange-500 hover:text-orange-400 underline">Privacy Policy</a> • <a href="#" className="text-orange-500 hover:text-orange-400 underline">Terms of Service</a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ServiceListingStatusUpdateEmail;

