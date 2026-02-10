"use client";

import { Box, Container, Grid, Typography, Card, CardActionArea, CardContent, Avatar } from "@mui/material";
import Link from "next/link";
import { ServiceDetail } from "../../data/servicesData";
import { motion } from "motion/react";
import { 
  ArrowForward, 
  School, 
  Language, 
  RecordVoiceOver, 
  AirplaneTicket, 
  Description, 
  Luggage 
} from "@mui/icons-material";

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
    <div className="pt-16 pb-2 bg-white">
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

        {/* Service Grid - Enhanced Interactive Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid
                key={service.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                component={motion.div}
                variants={itemVariants}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 340,
                    height: 360,
                    borderRadius: 4,
                    background: "#ffffff",
                    border: "2px solid #6B4FA1",
                    overflow: "hidden",
                    boxShadow: 4,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 10,
                    },
                    "&:hover .arrow-indicator": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Link href={`/services/${service.slug}`} passHref legacyBehavior>
                    <CardActionArea
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent
                        sx={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          p: 5,
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        {/* Icon Avatar */}
                        <Avatar
                          sx={{
                            width: 160,
                            height: 160,
                            mb: 3,
                            bgcolor: "transparent",
                          }}
                        >
                          {service.slug === "career-counseling" && <School sx={{ fontSize: 80, color: "#3d1a4d" }} />}
                          {service.slug === "language-preparation" && <Language sx={{ fontSize: 80, color: "#3d1a4d" }} />}
                          {service.slug === "interview-assistance" && <RecordVoiceOver sx={{ fontSize: 80, color: "#3d1a4d" }} />}
                          {service.slug === "visa-lodgment" && <AirplaneTicket sx={{ fontSize: 80, color: "#3d1a4d" }} />}
                          {service.slug === "documentation" && <Description sx={{ fontSize: 80, color: "#3d1a4d" }} />}
                          {service.slug === "pre-departure-info" && <Luggage sx={{ fontSize: 80, color: "#3d1a4d" }} />}
                        </Avatar>

                        {/* Title */}
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight="bold"
                          color="#3d1a4d"
                          sx={{
                            mb: 2,
                            px: 1,
                            lineHeight: 1.3,
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {service.title}
                        </Typography>

                        {/* Directional Arrow Indicator */}
                        <ArrowForward
                          className="arrow-indicator"
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            color: "#6B4FA1",
                            opacity: 0,
                            transform: "translateX(0)",
                            transition: "all 0.3s ease",
                            fontSize: 28,
                          }}
                        />
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
}
