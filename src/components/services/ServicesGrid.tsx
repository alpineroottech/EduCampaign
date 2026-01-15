"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { ServiceDetail } from "../../data/servicesData";
import { motion } from "motion/react";

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
    <Box sx={{ py: 8, bgcolor: "#faf7fc" }}>
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

        {/* Service Grid - Bento Flip Cards */}
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
          {/* Centering the grid items */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {services.map((service) => (
              <Grid
                key={service.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }} // Using 'size' for new Grid
                component={motion.div}
                variants={itemVariants}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                 {/* Flip Card Container */}
                <Box
                    sx={{
                        perspective: "1000px",
                        width: "100%",
                        height: 300, // Fixed height for consistent flipping
                        cursor: "pointer",
                        "&:hover > div": {
                            transform: "rotateY(180deg)",
                        },
                    }}
                >
                    {/* Inner Card (The flipper) */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            transition: "transform 0.6s",
                            transformStyle: "preserve-3d",
                            borderRadius: 4,
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                    >
                        {/* FRONT FACE */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden", // Safari fix
                                bgcolor: "#6B4FA1", // Primary Purple Background
                                borderRadius: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 3,
                            }}
                        >
                             <Box 
                                sx={{ 
                                    position: "relative", 
                                    width: 100, 
                                    height: 100, 
                                    mb: 3,
                                    p: 2,
                                    borderRadius: "50%",
                                    bgcolor: "white", // White circle behind icon
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: 2
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
                            <Typography variant="h5" component="h3" fontWeight="bold" color="white" align="center">
                                {service.title}
                            </Typography>
                        </Box>

                        {/* BACK FACE */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden", // Safari fix
                                bgcolor: "#6B4FA1", // Same purple for consistent flip
                                color: "white",
                                transform: "rotateY(180deg)",
                                borderRadius: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 4,
                                textAlign: "center",
                                border: "1px solid rgba(255,255,255,0.1)"
                            }}
                        >
                             <Link href={`/services/${service.slug}`} passHref legacyBehavior>
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    sx={{
                                        bgcolor: "white",
                                        color: "#6B4FA1",
                                        fontWeight: "bold",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        "&:hover": {
                                            bgcolor: "#f0f0f0",
                                        }
                                    }}
                                >
                                    Learn More
                                </Button>
                             </Link>
                        </Box>
                    </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
