import { Accordion } from "@hostifer/shared-ui";

const ITEMS = [
  {
    question: "Is Hostifer Suite a replacement for Microsoft 365?",
    answer:
      "Hostifer Suite covers the everyday business workspace needs — email, files, calendars and collaboration — adapted for Algerian companies. It's a focused alternative, not a one-to-one feature clone.",
  },
  {
    question: "Is email included?",
    answer:
      "Yes. Professional mailboxes on your own domain are included in every plan.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes, you can connect an existing domain, or we can help you choose and configure a new one.",
  },
  {
    question: "Is it based on Nextcloud?",
    answer:
      "Our cloud storage and collaboration layer is powered by a Nextcloud-like environment, managed for you end to end.",
  },
  {
    question: "Where is my data hosted?",
    answer:
      "We maintain a data residency focus with local and regional hosting, designed to help companies keep business data under clearer local control.",
  },
  {
    question: "Can I pay by invoice or bank transfer?",
    answer: "Yes, invoice and bank transfer are supported today.",
  },
  {
    question: "Is CIB payment supported?",
    answer:
      "CIB card payment is planned. Today, invoice and bank transfer are available.",
  },
  {
    question: "Can I get a dedicated environment?",
    answer:
      "Yes, dedicated Nextcloud/mail environments are available for companies with stricter requirements — talk to our sales team.",
  },
  {
    question: "Are backups included?",
    answer:
      "Yes, regular backups are included across mail and file storage.",
  },
  {
    question: "Can you help migrate existing email and files?",
    answer:
      "Yes, our team can help you plan and execute migration of existing mailboxes and files.",
  },
];

export function HomeFaq() {
  return <Accordion items={ITEMS} />;
}
