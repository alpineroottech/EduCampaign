import { notFound } from "next/navigation";
import HeroSection from "@/components/hero/HeroSection";
import { servicesData } from "../../../../data/servicesData";
import ServiceDetailView from "@/components/services/ServiceDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <HeroSection imageSrc="/images/service-1.webp" title="Services" />
      <ServiceDetailView currentService={service} allServices={servicesData} />
    </>
  );
}
