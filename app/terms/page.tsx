import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = pageMetadata({
  title: "Terms of service",
  description: "The terms that govern your use of Hostifer Suite.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      lastUpdated="—"
      intro="These terms govern your access to and use of Hostifer Suite. This page is a starting template — replace the sections below with your finalized legal terms before launch."
      sections={[
        {
          heading: "1. Agreement",
          body: "By creating a Hostifer Suite workspace or using our services, your company agrees to these terms. If you are accepting on behalf of an organization, you confirm you are authorized to do so.",
        },
        {
          heading: "2. The service",
          body: "Hostifer Suite provides managed business email, cloud file storage, collaboration tools, and an admin console. Availability, plans, and included limits are described on our product and pricing pages and may evolve over time.",
        },
        {
          heading: "3. Accounts and workspaces",
          body: "Your workspace administrators are responsible for managing users, domains, mailboxes, and access. You are responsible for keeping account credentials secure and for the activity within your workspace.",
        },
        {
          heading: "4. Billing",
          body: "Paid plans are billed per the terms shown at signup. Invoice and bank transfer are supported today; other payment methods may be added later. Taxes and fees may apply.",
        },
        {
          heading: "5. Acceptable use",
          body: "You agree not to use the service for unlawful activity, to send spam, or to disrupt the service or other tenants. We may suspend workspaces that violate these terms.",
        },
        {
          heading: "6. Data and privacy",
          body: "Our handling of personal data is described in our Privacy policy. You retain ownership of your content; we process it to operate and support the service.",
        },
        {
          heading: "7. Changes",
          body: "We may update these terms as the service evolves. Material changes will be communicated to workspace administrators.",
        },
      ]}
    />
  );
}
