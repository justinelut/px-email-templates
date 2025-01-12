import { Html, Head, Preview, Body, Container, Tailwind, Text, Button, Img, Section } from '@react-email/components';

export const ProfileCompletionReminderEmail = () => {
  // Mock data
  const userData = {
    name: "Alex",
    profileCompletion: 60,
    incompleteFields: ["Profile picture", "Phone number", "Preferred location"]
  };

  return (
    <Html>
      <Head />
      <Preview>Boost your ListingPro profile - unlock amazing opportunities!</Preview>
      <Tailwind>
        <Body className="bg-gray-900 font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Img
              src="https://via.placeholder.com/150x50?text=Fundi+Wangu+Logo"
              width="150"
              height="50"
              alt="Fundi Wangu Logo"
              className="mx-auto mb-8"
            />
            <Section className="bg-gray-800 rounded-xl shadow-lg p-8">
              <Text className="text-3xl font-extrabold text-center text-white mb-6">
                Hey {userData.name}, let's make your profile shine! ✨
              </Text>
              <Text className="text-lg text-gray-300 mb-6">
                You're so close to unlocking the full potential of your profile. Complete it now to connect with more potential clients or customers.
              </Text>
              <Section className="bg-orange-50 rounded-lg p-6 mb-6">
                <Text className="text-2xl font-bold text-center text-orange-600 mb-4">
                  {userData.profileCompletion}% Complete
                </Text>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-orange-600 h-3 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${userData.profileCompletion}%` }}
                  ></div>
                </div>
              </Section>
              <Text className="text-xl font-semibold text-white mb-4">
                Let's finish up these details:
              </Text>
              <ul className="space-y-2 text-gray-300 mb-6">
                {userData.incompleteFields.map((field, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {field}
                  </li>
                ))}
              </ul>
              <Section className="text-center">
                <Button
                  className="bg-orange-600 hover:bg-orange-700 transition-colors duration-200 rounded-lg text-white font-semibold no-underline text-center px-6 py-3"
                  href="https://listingpro.com/complete-profile"
                >
                  Complete My Profile
                </Button>
              </Section>
            </Section>
            <Text className="text-sm text-center text-gray-400 mt-8">
              © 2023 Fundi Wangu. All rights reserved.
              <br />
              If you no longer wish to receive these emails, you can <a href="#" className="text-orange-600 hover:text-orange-700 underline">unsubscribe here</a>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ProfileCompletionReminderEmail;
