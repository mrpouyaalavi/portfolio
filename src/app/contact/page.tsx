import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pouya Alavi Naeini. Open to collaborations, opportunities, and conversations.",
  openGraph: {
    title: "Contact | Pouya Alavi Naeini",
    description:
      "Get in touch with Pouya Alavi Naeini. Open to collaborations, opportunities, and conversations.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

