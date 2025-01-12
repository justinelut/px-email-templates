import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section, Link } from '@react-email/components';

export const PaymentConfirmationEmail = () => {
  // Mock data
  const clientName = "Alex";
  const serviceName = "Electrical Wiring Installation";
  const paymentAmount = "5,000 KES";
  const paymentDate = "June 25, 2023";
  const paymentTime = "3:45 PM";
  const paymentMethod = "M-Pesa";
  const transactionId = "TRX123456";
  const receiptUrl = "https://fundiwangu.com/receipts/TRX123456";

  return (
    <Html>
      <Head />
      <Preview>Payment Confirmed: {paymentAmount} for {serviceName} - Fundi Wangu</Preview>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full transform translate-x-32 -translate-y-32 opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full transform -translate-x-32 translate-y-32 opacity-10"></div>
              
              <Text className="text-4xl font-extrabold text-center text-white mb-6 relative z-10">
                Payment Confirmed! 💰
              </Text>
              
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-1 mb-8 relative z-10">
                <div className="bg-black rounded-xl p-6 text-center">
                  <Text className="text-5xl font-bold text-white mb-2">
                    {paymentAmount}
                  </Text>
                  <Text className="text-xl text-orange-500">
                    Payment Received
                  </Text>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 mb-8 relative z-10">
                <Text className="text-xl font-semibold text-white mb-4 text-center">
                  Payment Details
                </Text>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🔧", label: "Service", value: serviceName },
                    { icon: "📅", label: "Date", value: paymentDate },
                    { icon: "🕒", label: "Time", value: paymentTime },
                    { icon: "💳", label: "Method", value: paymentMethod },
                    { icon: "🔢", label: "Transaction ID", value: transactionId },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Text className="text-2xl mr-2">{item.icon}</Text>
                      <div>
                        <Text className="text-sm text-gray-400">{item.label}</Text>
                        <Text className="text-base font-medium text-white">{item.value}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Section className="text-center mb-8 relative z-10">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 rounded-full text-white font-bold no-underline text-center px-8 py-4 text-lg transform hover:scale-105"
                  href={receiptUrl}
                >
                  View Full Receipt
                </Button>
              </Section>
              
              <Text className="text-lg text-gray-300 mb-6 relative z-10">
                Thank you, {clientName}! Your payment for {serviceName} has been successfully processed. We appreciate your business and look forward to serving you.
              </Text>
              
              <div className="bg-gray-800 rounded-xl p-6 mb-6 relative z-10">
                <Text className="text-lg font-semibold text-white mb-2 text-center">
                  Need Help?
                </Text>
                <Text className="text-base text-gray-300 text-center">
                  If you have any questions about this payment, please contact our support team at{' '}
                  <Link href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-400">
                    support@fundiwangu.com
                  </Link> or call us at +254 700 123 456.
                </Text>
              </div>
              
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

export default PaymentConfirmationEmail;

