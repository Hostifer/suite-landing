import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: "How Hostifer Suite collects, uses, and protects your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      lastUpdated="—"
      intro="This policy explains how Hostifer Suite handles personal and company data. This page is a starting template — replace the sections below with your finalized privacy policy before launch."
      sections={[
        {
          heading: "1. Data we collect",
          body: "We collect account and workspace details (such as company name, admin and user names, email addresses, and domain information) and the content you store in mail and files, as well as basic usage and technical logs needed to operate the service.",
        },
        {
          heading: "2. How we use data",
          body: "We use data to provision and operate your workspace, provide support, secure the service, bill for paid plans, and communicate important updates.",
        },
        {
          heading: "3. Data residency",
          body: "Hostifer Suite maintains a data-residency focus with local and regional hosting, designed to help companies keep business data under clearer local control.",
        },
        {
          heading: "4. Security",
          body: "We apply tenant isolation, encrypted connections, access controls, and regular backups. No system is perfectly secure, but we work to protect your workspace and data.",
        },
        {
          heading: "5. Sharing",
          body: "We do not sell your data. We share it only with service providers needed to operate Hostifer Suite, or where required by law.",
        },
        {
          heading: "6. Your choices",
          body: "Workspace administrators can manage users and data within the admin console. To request data access, correction, or deletion, contact us.",
        },
        {
          heading: "7. Changes",
          body: "We may update this policy as the service evolves. Material changes will be communicated to workspace administrators.",
        },
      ]}
    />
  );
}
