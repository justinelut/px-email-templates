import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const AppointmentReminderEmail = () => {
  // Mock data
  const clientName = "Sarah";
  const serviceName = "Electrical Wiring Installation";
  const providerName = "John Doe";
  const appointmentDate = "June 20, 2023";
  const appointmentTime = "2:00 PM";
  const appointmentLocation = "123 Main St, Nairobi";
  const appointmentId = "APT12345";

  return (
    <Html>
      <Head />
      <Preview>Reminder: Your upcoming appointment with Fundi Wangu</Preview>
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
                Appointment Reminder
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                Hello {clientName},
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                This is a friendly reminder about your upcoming appointment with Fundi Wangu.
              </Text>
              <Section className="bg-gray-800 rounded-lg p-6 mb-6">
                <Text className="text-xl text-center text-orange-500 mb-4">
                  Appointment Details
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Service:</span> {serviceName}
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Provider:</span> {providerName}
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Date:</span> {appointmentDate}
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Time:</span> {appointmentTime}
                </Text>
                <Text className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">Location:</span> {appointmentLocation}
                </Text>
                <Text className="text-base text-gray-300">
                  <span className="font-semibold">Appointment ID:</span> {appointmentId}
                </Text>
              </Section>
              <Text className="text-lg text-gray-300 mb-6">
                Please ensure you're available at the specified time and location. If you need to reschedule or cancel, please do so at least 24 hours in advance.
              </Text>
              <Section className="text-center mb-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                  href="https://fundiwangu.com/appointments"
                >
                  Manage Appointment
                </Button>
              </Section>
              <Text className="text-sm text-gray-400 mb-4">
                If you have any questions or need to make changes to your appointment, please contact us at{' '}
                <a href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-400">
                  support@fundiwangu.com
                </a> or call us at +254 700 123 456.
              </Text>
              <Text className="text-sm text-gray-400 font-semibold">
                Thank you for choosing Fundi Wangu for your service needs!
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

export default AppointmentReminderEmail;

