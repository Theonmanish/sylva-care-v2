import type { Metadata } from "next";
import { CareGuide } from "@/components/care/CareGuide";
import { careGuides } from "@/content/care-guide";

export const metadata: Metadata = {
  title: "Terrarium Care Guide",
  description: "Care guidance for Sylva Auris terrariums, including light, water, airflow and common questions.",
  alternates: { canonical: "/terrariums" },
};

export default function TerrariumsPage() {
  return <CareGuide content={careGuides.terrariums} />;
}
