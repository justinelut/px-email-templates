import { Img, Section } from "@react-email/components";

export const EmailHeader = () => {
  return (
    <Section style={header}>
      <Img
        src="https://via.placeholder.com/200x50?text=ListingPro"
        width="200"
        height="50"
        alt="ListingPro Logo"
        style={logo}
      />
    </Section>
  );
};

const header = {
  backgroundColor: '#4F46E5',
  padding: '20px',
  textAlign: 'center' as const,
};

const logo = {
  display: 'inline-block',
};

