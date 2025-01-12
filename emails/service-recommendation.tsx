import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section, Link } from '@react-email/components';

export const ServiceRecommendationsEmail = () => {
  // Mock data
  const clientName = "Alex";
  const recommendations = [
    { name: "Home Painting", image: "https://via.placeholder.com/300x200?text=Home+Painting", price: "15,000 KES", rating: 4.8 },
    { name: "Plumbing Repair", image: "https://via.placeholder.com/300x200?text=Plumbing+Repair", price: "5,000 KES", rating: 4.9 },
    { name: "Lawn Maintenance", image: "https://via.placeholder.com/300x200?text=Lawn+Maintenance", price: "3,500 KES", rating: 4.7 },
  ];

  return (
    <Html>
      <Head />
      <Preview>Discover top-rated services tailored just for you - Fundi Wangu</Preview>
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
                Services Just for You! 🌟
              </Text>
              
              <Text className="text-xl text-gray-300 mb-8 text-center relative z-10">
                Hey {clientName}, we've handpicked these amazing services we think you'll love!
              </Text>
              
              {recommendations.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 mb-8 relative z-10 transform transition-all duration-300 hover:scale-105">
                  <div className="relative mb-4">
                    <Img
                      src={service.image}
                      width="300"
                      height="200"
                      alt={service.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      ⭐ {service.rating}
                    </div>
                  </div>
                  <Text className="text-2xl font-bold text-white mb-2">
                    {service.name}
                  </Text>
                  <Text className="text-xl text-orange-500 font-semibold mb-4">
                    Starting at {service.price}
                  </Text>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 rounded-full text-white font-bold no-underline text-center px-6 py-3 text-lg"
                    href={`https://fundiwangu.com/services/${service.name.toLowerCase().replace(' ', '-')}`}
                  >
                    Book Now
                  </Button>
                </div>
              ))}
              
              <Section className="text-center mb-8 relative z-10">
                <Button
                  className="bg-white text-orange-500 hover:bg-gray-100 transition-all duration-300 rounded-full font-bold no-underline text-center px-8 py-4 text-lg transform hover:scale-105"
                  href="https://fundiwangu.com/services"
                >
                  Explore All Services
                </Button>
              </Section>
              
              <Text className="text-lg text-gray-300 mb-6 text-center relative z-10">
                These recommendations are based on your previous bookings and top-rated services in your area.
              </Text>
              
              <div className="bg-gray-800 rounded-xl p-6 mb-6 relative z-10">
                <Text className="text-lg font-semibold text-white mb-2 text-center">
                  Need Help?
                </Text>
                <Text className="text-base text-gray-300 text-center">
                  Our expert team is here to assist you. Contact us at{' '}
                  <Link href="mailto:support@fundiwangu.com" className="text-orange-500 hover:text-orange-400">
                    support@fundiwangu.com
                  </Link> or call +254 700 123 456.
                </Text>
              </div>
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

export default ServiceRecommendationsEmail;

