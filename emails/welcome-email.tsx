import { Html, Head, Preview, Body, Tailwind, Text, Button, Img, Section, Container } from '@react-email/components';

export const WelcomeEmailTemplate = () => {
  // Mock data
  const userData = {
    name: "Alex Johnson",
    featuredListings: [
      { id: 1, title: "Cozy Downtown Apartment", image: "https://via.placeholder.com/300x200?text=Apartment", price: "$1,200/mo" },
      { id: 2, title: "Spacious Suburban House", image: "https://via.placeholder.com/300x200?text=House", price: "$350,000" },
      { id: 3, title: "Modern Office Space", image: "https://via.placeholder.com/300x200?text=Office", price: "$25/sqft/year" },
    ],
  };

  return (
    <Html>
      <Head>
      
          
      </Head>
      <Preview>Welcome to Fundi Wangu - Find Trusted Services Near You!</Preview>
      <Tailwind>
        <Body className="bg-gray-900 text-white font-sans">
          {/* Main Container */}
          <Container className="mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden max-w-3xl">
            {/* Gradient Header */}
            <Section className="bg-gradient-to-r from-orange-500 to-orange-700 text-center p-8">
              <Img
                src="https://via.placeholder.com/150x50?text=Fundi+Wangu+Logo"
                alt="Fundi Wangu Logo"
                width="180"
                className="mx-auto mb-4"
              />
              <Text className="text-4xl font-bold mb-2">Welcome, {userData.name}! 🎉</Text>
              <Text className="text-lg text-white">
                Start discovering trusted local services and exciting property listings.
              </Text>
            </Section>

            {/* Highlighted Section */}
            <Section className="bg-gradient-to-b from-gray-800 to-gray-900 p-6">
              <Text className="text-2xl font-bold mb-4 text-orange-400 text-center">
                What Can You Do with Fundi Wangu?
              </Text>
              <ul className="list-none text-gray-300 text-lg">
                <li className="mb-2 flex items-center">
                  <span className="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                  Find verified local experts and services.
                </li>
                <li className="mb-2 flex items-center">
                  <span className="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                  Browse property listings that fit your needs.
                </li>
                <li className="mb-2 flex items-center">
                  <span className="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                  Connect directly with professionals in your area.
                </li>
              </ul>
            </Section>

            {/* Featured Listings */}
            <Section className="bg-gray-800 p-6 rounded-b-lg">
              <Text className="text-2xl font-bold text-orange-400 mb-4 text-center">
                Featured Listings You Might Like
              </Text>
              <div className="grid grid-cols-1  gap-4">
                {userData.featuredListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="rounded-lg overflow-hidden shadow-lg bg-gray-900"
                  >
                    <Img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <Text className="text-lg font-bold text-orange-400">{listing.title}</Text>
                      <Text className="text-gray-300">{listing.price}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* CTA Section */}
            <Section className="text-center p-6 bg-gradient-to-r from-orange-600 to-orange-700">
              <Button
                pX={20}
                pY={12}
                className="bg-black rounded-full text-orange-400 font-bold text-lg shadow-md hover:bg-gray-800"
                href="https://fundiwangu.com/get-started"
              >
                Start Exploring Now
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

export default WelcomeEmailTemplate;
