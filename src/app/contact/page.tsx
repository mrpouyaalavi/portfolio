import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Leo Alavi. Open to collaborations, opportunities, and conversations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Leo Alavi",
    description:
      "Get in touch with Leo Alavi. Open to collaborations, opportunities, and conversations.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

