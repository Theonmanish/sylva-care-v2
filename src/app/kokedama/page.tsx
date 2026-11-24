import type { Metadata } from "next";
import { CareGuide } from "@/components/care/CareGuide";
import { careGuides } from "@/content/care-guide";

export const metadata: Metadata = {
  title: "Kokedama Care Guide",
  description: "Care guidance for Sylva Auris Kokedama, including light, watering, humidity and common questions.",
  alternates: { canonical: "/kokedama" },
};

export default function KokedamaPage() {
  return <CareGuide content={careGuides.kokedama} />;
}
