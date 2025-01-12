import { Text, Hr, Link } from "@react-email/components";

export const EmailFooter = () => {
  return (
    <footer style={footer}>
      <Hr style={hr} />
      <Text style={text}>© 2023 ListingPro. All rights reserved.</Text>
      <Text style={text}>123 Listing Lane, Property City, PC 12345</Text>
      <Text style={text}>
        <Link href="#" style={link}>
          Unsubscribe
        </Link>{" "}
        •{" "}
        <Link href="#" style={link}>
          View in browser
        </Link>
      </Text>
    </footer>
  );
};

const footer = {
  backgroundColor: "#F3F4F6",
  padding: "20px",
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#E5E7EB",
  margin: "20px 0",
};

const text = {
  color: "#4B5563",
  fontSize: "12px",
  lineHeight: "16px",
};

const link = {
  color: "#4F46E5",
  textDecoration: "underline",
};
