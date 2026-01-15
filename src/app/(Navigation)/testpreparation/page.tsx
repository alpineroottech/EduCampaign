"use client";

import HeroSection from "@/components/hero/HeroSection";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "motion/react";
import TestPrepCarousel from "@/components/testprep/TestPrepCarousel";
import { testPreparationCards } from "@/data/testPrepData";

export default function TestPreparation() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#faf7fc" }}>
      {/* Hero Section */}
      <HeroSection imageSrc="/images/testpreparation/exam.webp" title="Test Preparation" />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Japan has become one of the most popular destinations for international students who
            wish to combine quality education with cultural immersion. Known for its advanced
            technology, discipline, and academic excellence, Japan offers affordable tuition fees
            compared to many Western countries.
          </Typography>
        </motion.div>
      </Container>

      {/* Test Preparation Carousel */}
      <Container maxWidth="xl" sx={{ pb: { xs: 8, md: 12 } }}>
        <TestPrepCarousel cards={testPreparationCards} />
      </Container>
    </Box>
  );
}
