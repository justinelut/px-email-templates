import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section, Link } from '@react-email/components';

export const BookingConfirmationEmail = () => {
  // Mock data
  const clientName = "Sarah";
  const serviceName = "Electrical Wiring Installation";
  const providerName = "John Doe";
  const appointmentDate = "June 25, 2023";
  const appointmentTime = "2:00 PM";
  const appointmentLocation = "123 Main St, Nairobi";
  const appointmentId = "BKG12345";
  const totalAmount = "5,000 KES";
  const serviceImageUrl = "https://via.placeholder.com/300x200?text=Electrical+Wiring";

  return (
    <Html>
      <Head />
      <Preview>Your Fundi Wangu booking is confirmed! Get ready for {serviceName}</Preview>
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
            <Section className="bg-black rounded-3xl shadow-2xl p-8 border-2 border-orange-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full transform -translate-x-32 -translate-y-32 opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500 rounded-full transform translate-x-32 translate-y-32 opacity-10"></div>
              
              <Text className="text-4xl font-extrabold text-center text-white mb-6 relative z-10">
                Booking Confirmed! 🎉
              </Text>
              
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-1 mb-8 relative z-10">
                <div className="bg-black rounded-xl p-6">
                  <Img
                    src={serviceImageUrl}
                    width="300"
                    height="200"
                    alt={serviceName}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <Text className="text-2xl font-bold text-center text-orange-500 mb-2">
                    {serviceName}
                  </Text>
                  <Text className="text-lg text-center text-gray-300">
                    with {providerName}
                  </Text>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                {[
                  { icon: "📅", label: "Date", value: appointmentDate },
                  { icon: "🕑", label: "Time", value: appointmentTime },
                  { icon: "📍", label: "Location", value: appointmentLocation },
                  { icon: "🔢", label: "Booking ID", value: appointmentId },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                    <Text className="text-2xl mb-2">{item.icon}</Text>
                    <Text className="text-sm text-gray-400 mb-1">{item.label}</Text>
                    <Text className="text-lg font-semibold text-white">{item.value}</Text>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 mb-8 relative z-10">
                <Text className="text-2xl font-bold text-center text-white mb-2">
                  Total Amount
                </Text>
                <Text className="text-4xl font-extrabold text-center text-white">
                  {totalAmount}
                </Text>
              </div>
              
              <Section className="text-center mb-8 relative z-10">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 rounded-full text-white font-bold no-underline text-center px-8 py-4 text-lg transform hover:scale-105"
                  href={`https://fundiwangu.com/bookings/${appointmentId}`}
                >
                  Manage My Booking
                </Button>
              </Section>
              
              <Text className="text-lg text-gray-300 mb-6 relative z-10">
                Hi {clientName}, your booking is all set! If you need to reschedule or cancel, please do so at least 24 hours in advance to avoid any cancellation fees.
              </Text>
              
              <Text className="text-sm text-gray-400 mb-4 text-center relative z-10">
                Questions or changes? Contact us at{' '}
                <Link href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-400">
                  support@fundiwangu.com
                </Link> or call +254 700 123 456.
              </Text>
              
              <Text className="text-sm text-gray-400 font-semibold text-center relative z-10">
                Thank you for choosing Fundi Wangu for your service needs!
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

export default BookingConfirmationEmail;

