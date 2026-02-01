"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { ServiceDetail } from "../../data/servicesData";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServicesGridProps {
  services: ServiceDetail[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="pt-16 pb-2 bg-[#faf7fc]">
      <Container maxWidth="xl">
        {/* Main Content Title */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#3d1a4d",
              mb: 2,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                display: "block",
                width: "60%",
                height: "4px",
                bgcolor: "#6B4FA1",
                margin: "8px auto 0",
                borderRadius: "2px",
              },
            }}
          >
            Our Services
          </Typography>
        </Box>

        {/* Service Grid - Standard Interactive Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Grid container spacing={4} justifyContent="center">
            {services.map((service) => (
              <Grid
                key={service.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                component={motion.div}
                variants={itemVariants}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Link href={`/services/${service.slug}`} passHref legacyBehavior>
                  <Box
                    component="a"
                    sx={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 340,
                      height: 320,
                      borderRadius: 4,
                      bgcolor: "#6B4FA1", // Primary Purple
                      overflow: "hidden",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 4,
                      cursor: "pointer",
                      boxShadow: 3,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: 10,
                        backgroundColor: "#583c8b", // Slightly darker on hover
                      },
                      // Group hover effects for children
                      "&:hover .learn-more-btn": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "&:hover .icon-box": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {/* Icon Circle */}
                    <Box
                      className="icon-box"
                      sx={{
                        position: "relative",
                        width: 100,
                        height: 100,
                        mb: 3,
                        p: 2,
                        borderRadius: "50%",
                        bgcolor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 2,
                        transition: "transform 0.4s ease",
                      }}
                    >
                      <Box sx={{ position: "relative", width: "70%", height: "70%" }}>
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      component="h3"
                      fontWeight="bold"
                      color="white"
                      align="center"
                      sx={{ 
                        mb: 2,
                        px: 1,
                        lineHeight: 1.2
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Learn More Button (Hidden by default on desktop, appears on hover) */}
                    <Box
                      className="learn-more-btn"
                      sx={{
                        opacity: { xs: 1, md: 0 }, // Visible on mobile, hidden on desktop initially
                        transform: { xs: "translateY(0)", md: "translateY(10px)" }, // No transform on mobile
                        transition: "all 0.3s ease",
                        mt: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        bgcolor: "white",
                        color: "#6B4FA1",
                        px: 3,
                        py: 1,
                        borderRadius: "50px",
                        fontWeight: "bold",
                        fontSize: "0.875rem",
                      }}
                    >
                      Learn More <ArrowRight size={16} />
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
}
