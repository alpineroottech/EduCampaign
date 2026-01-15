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
            Excel in your test preparation journey with EduCampaign's expert-led courses. Whether you're targeting IELTS for international education, PTE Academic for global opportunities, JLPT for Japanese language proficiency, or SSW/JFT-Basic for specialized skilled work in Japan, our comprehensive programs are designed to help you achieve your goals with confidence.
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
