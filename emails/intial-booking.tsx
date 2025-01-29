import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section, Link } from '@react-email/components';

interface BookingData {
  user: {
    name: string;
    email: string;
  };
  service: {
    title: string;
    description: string;
    images: string[];
    price: number;
  };
  business: {
    name: string;
    logo: string;
  };
  scheduletime: string;
  street_address: string;
  estimated_cost: number;
  $id: string;
}

export const InitialBookingEmail = ({ 
  user,
  service,
  business,
  scheduletime,
  street_address,
  estimated_cost,
  $id
}: BookingData) => {
  return (
    <Html>
      <Head />
      <Preview>Your booking for {service.title} has been received!</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Img
              src={business.logo}
              width="150"
              height="50"
              alt={`${business.name} Logo`}
              className="mx-auto mb-8"
            />
            <Section className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-500">
              <Text className="text-3xl font-bold text-center text-gray-800 mb-6">
                Booking Received!
              </Text>
              <Text className="text-xl text-gray-700 mb-6 text-center">
                Hi {user.name}, we've received your booking for:
              </Text>
              
              <Section className="bg-orange-100 rounded-lg p-6 mb-8">
                <Img
                  src={service.images[0]}
                  width="300"
                  height="200"
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Text className="text-2xl font-bold text-orange-800 mb-2">
                  {service.title}
                </Text>
                <Text className="text-base text-gray-700 mb-4">
                  {service.description}
                </Text>
                <Text className="text-lg font-semibold text-orange-800">
                  Estimated Cost: KES {estimated_cost.toLocaleString()}
                </Text>
              </Section>
              
              <Section className="mb-8">
                <Text className="text-lg font-semibold text-gray-800 mb-2">
                  Booking Details:
                </Text>
                <Text className="text-base text-gray-700 mb-1">
                  <span className="font-semibold">Date & Time:</span> {new Date(scheduletime).toLocaleString()}
                </Text>
                <Text className="text-base text-gray-700 mb-1">
                  <span className="font-semibold">Location:</span> {street_address}
                </Text>
                <Text className="text-base text-gray-700">
                  <span className="font-semibold">Booking ID:</span> {$id}
                </Text>
              </Section>
              
              <Section className="text-center mb-8">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                  href={`https://fundiwangu.com/bookings/${$id}`}
                >
                  View Booking Details
                </Button>
              </Section>
              
              <Text className="text-base text-gray-700 mb-6">
                We'll notify you once the service provider confirms your booking. If you have any questions or need to make changes, please don't hesitate to contact us.
              </Text>
              
              <Section className="bg-gray-100 rounded-lg p-6">
                <Text className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Need Help?
                </Text>
                <Text className="text-base text-gray-700 text-center">
                  Our support team is here for you. Contact us at{' '}
                  <Link href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-600">
                    support@fundiwangu.com
                  </Link>
                </Text>
              </Section>
            </Section>
            <Text className="text-sm text-center text-gray-600 mt-8">
              © 2025 {business.name}. All rights reserved.
              <br />
              <Link href="#" className="text-orange-500 hover:text-orange-600 underline">Privacy Policy</Link> • <Link href="#" className="text-orange-500 hover:text-orange-600 underline">Terms of Service</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default InitialBookingEmail;

