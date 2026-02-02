"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { ServiceDetail } from "../../data/servicesData";
import ServiceSidebar from "./ServiceSidebar";

interface ServiceDetailViewProps {
  currentService: ServiceDetail;
  allServices: ServiceDetail[];
}

export default function ServiceDetailView({ currentService, allServices }: ServiceDetailViewProps) {
  return (
    <div className="pt-16 pb-2 bg-[#faf7fc] min-h-screen">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sidebar (Left Column) - 3 columns */}
          {/* Order: 2 on Mobile (Bottom), 1 on Desktop (Left) */}
          <Grid size={{ xs: 12, md: 3 }} sx={{ order: { xs: 2, md: 1 } }}>
            <ServiceSidebar services={allServices} />
          </Grid>

          {/* Main Content (Right Column) - 9 columns */}
          {/* Order: 1 on Mobile (Top), 2 on Desktop (Right) */}
          <Grid size={{ xs: 12, md: 9 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="main">
              {/* Service Title */}
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#3d1a4d", mb: 3 }}>
                {currentService.title}
              </Typography>

              {/* Description */}
              <Box sx={{ "& > p": { mb: 2, lineHeight: 1.7, color: "text.secondary" } }}>
                {currentService.description.map((paragraph: string, index: number) => (
                  <Typography key={index} variant="body1" paragraph>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
