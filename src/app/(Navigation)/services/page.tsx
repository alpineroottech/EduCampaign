import HeroSection from "@/components/hero/HeroSection";
import { servicesData } from "../../../data/servicesData";
import ServicesGrid from "@/components/services/ServicesGrid";
import ImportantDocuments from "@/components/services/ImportantDocuments";

export const metadata = {
  title: "Services | EduCampaign",
  description: "Explore our comprehensive educational services including counseling, visa assistance, and preparation.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection imageSrc="/images/service-1.webp" title="SERVICES" />
      <ServicesGrid services={servicesData} />
      <ImportantDocuments />
    </>
  );
}
