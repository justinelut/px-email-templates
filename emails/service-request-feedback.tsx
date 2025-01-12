import { Html, Head, Preview, Body, Tailwind, Text, Button, Section, Img, Container } from '@react-email/components';

export const ServiceFeedbackRequestEmail = () => {
  // Mock data for user
  const userData = {
    name: "Alex Johnson",
  };

  // Mock data for completed service
  const serviceData = {
    serviceRequested: "Plumber",
    serviceDetails: "Leaky kitchen sink fixed successfully.",
    serviceImage: "https://via.placeholder.com/300x200?text=Completed+Plumbing+Service",
    serviceAgent: "John Doe (Plumbing Expert)",
    serviceFee: "KSh 1,500",
    feedbackLink: "https://fundiwangu.com/feedback",
  };

  return (
    <Html>
      <Head />
      <Preview>We'd love to hear your thoughts! Please leave feedback about your recent service experience.</Preview>
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
              <Text className="text-4xl font-bold mb-2">How Was Your Service, {userData.name}? 🌟</Text>
              <Text className="text-lg text-white">
                We hope your service experience was great! Please take a moment to share your feedback to help us improve.
              </Text>
            </Section>

            {/* Service Details Section */}
            <Section className="bg-gray-800 p-6 rounded-lg mb-6">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                Service Details
              </Text>
              <div className="flex flex-col gap-6">
                {/* Service Image */}
                <div className="w-full">
                  <Img
                    src={serviceData.serviceImage}
                    alt={serviceData.serviceRequested}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                {/* Service Information */}
                <div className="flex flex-col gap-2">
                  <Text className="text-lg text-white">
                    <span className="font-semibold">Service Requested: </span>{serviceData.serviceRequested}
                  </Text>
                  <Text className="text-lg text-white">
                    <span className="font-semibold">Service Description: </span>{serviceData.serviceDetails}
                  </Text>
                  <Text className="text-lg text-white">
                    <span className="font-semibold">Service Agent: </span>{serviceData.serviceAgent}
                  </Text>
                  <Text className="text-lg text-white">
                    <span className="font-semibold">Service Fee: </span>{serviceData.serviceFee}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Feedback CTA Section */}
            <Section className="text-center p-6 bg-gradient-to-r from-orange-600 to-orange-700">
              <Button
                className="bg-orange-600 rounded-full text-white font-bold text-lg shadow-md hover:bg-orange-500 px-4 py-3"
                href={serviceData.feedbackLink}
              >
                Leave Feedback
              </Button>
            </Section>

            {/* Footer */}
            <Section className="text-center bg-gray-900 p-6">
              <Text className="text-sm text-gray-400">
                If you have any issues or questions, please don't hesitate to contact us at{" "}
                <a href={serviceData.supportLink} className="text-orange-400 underline">
                  Fundi Wangu Support
                </a>.
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

export default ServiceFeedbackRequestEmail;
