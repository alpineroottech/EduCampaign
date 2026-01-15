"use client";

import { useState } from "react";
import HeroSection from "@/components/hero/HeroSection";
import { Box, Container, Typography, Paper, Card, CardContent, TextField, Button, Grid } from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";

export default function PTE() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your enquiry!");
  };

  const testSections = [
    {
      title: "Speaking & Writing (77–93 min)",
      description:
        "This combined section includes personal introduction, read aloud, repeat sentences, describe images, re-tell lectures, answer short questions, summarize written text (200-300 words), and essay writing (200-300 words). The integrated nature tests your ability to communicate effectively across multiple skills simultaneously.",
    },
    {
      title: "Reading (32–41 min)",
      description:
        "Five different question types assess reading comprehension: multiple-choice questions (single and multiple answers), re-order paragraphs to test logical understanding, reading and writing fill in the blanks to test vocabulary and grammar in context. All tasks use authentic academic texts from various disciplines.",
    },
    {
      title: "Listening (45–57 min)",
      description:
        "Eight task types evaluate listening skills: summarize spoken text, multiple-choice questions (single and multiple answers), fill in the blanks, highlight correct summary, select missing words, highlight incorrect words, and write from dictation. Audio content includes lectures, conversations, and academic discussions.",
    },
  ];

  const features = [
    "Expert trainers with extensive PTE Academic teaching experience and high scores",
    "AI-powered practice platform with automated scoring exactly like the real test",
    "Comprehensive coverage of all 20 question types across three main sections",
    "Speaking practice with voice recording analysis and pronunciation feedback",
    "Writing templates and strategies for summarizing texts and essay composition",
    "Regular full-length mock tests simulating actual PTE Academic exam conditions",
    "Personalized study plans based on your current level and target score",
    "Tips and techniques for time management and maximizing your section scores",
  ];

  const advantages = [
    {
      title: "Fast Results",
      description: "Receive your scores within 48 hours, the fastest among English proficiency tests",
    },
    {
      title: "AI Scoring",
      description: "Completely automated scoring eliminates human bias and ensures consistency",
    },
    {
      title: "Flexible Scheduling",
      description: "Test centers offer multiple slots throughout the year with easy online booking",
    },
    {
      title: "Global Recognition",
      description: "Accepted by thousands of universities, colleges, and governments worldwide",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#faf7fc" }}>
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        title="PTE Academic Preparation"
      />

      {/* Introduction */}
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
              mb: 4,
            }}
          >
            PTE Academic (Pearson Test of English Academic) is a computer-based English language test
            designed to assess the readiness of non-native English speakers to participate in university-level
            English language instruction. Trusted by universities, colleges, and governments around the world,
            PTE Academic uses cutting-edge AI technology to provide fair, accurate, and unbiased scoring of
            all test sections within 48 hours.
          </Typography>
        </motion.div>

        {/* Key Advantages */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {advantages.map((advantage, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                      bgcolor: "#f5f0ff",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#6B4FA1",
                        mb: 1,
                        fontSize: "1.1rem",
                      }}
                    >
                      {advantage.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {advantage.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Test Sections */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#3d1a4d",
            mb: 4,
            textAlign: "center",
          }}
        >
          Three Main Test Sections
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {testSections.map((section, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#6B4FA1",
                        mb: 2,
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {section.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Course Features */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            mb: 6,
            bgcolor: "#f5f0ff",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#3d1a4d",
              mb: 4,
              textAlign: "center",
            }}
          >
            Our PTE Academic Preparation Course Features
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Typography sx={{ color: "#6B4FA1", fontSize: "1.5rem", lineHeight: 1 }}>
                    ▸
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                    {feature}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Statistics */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            mb: 6,
            border: "2px solid",
            borderColor: "#6B4FA1",
          }}
        >
          <Grid container spacing={4} sx={{ textAlign: "center" }}>
            {[
              { number: "12,000+", label: "Happy Students" },
              { number: "120+", label: "Expert Instructors" },
              { number: "500+", label: "Success Stories" },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#6B4FA1",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {item.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Important Note */}
        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: "#fff9e6",
            borderLeft: "4px solid #6B4FA1",
            mb: 6,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#6B4FA1", flexShrink: 0 }}
            >
              Important Note:
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              PTE Academic scores range from 10 to 90 points, with individual section scores that are
              averaged for an overall score. The scoring is based on the Global Scale of English (GSE),
              providing detailed insights into your English language abilities. Most universities require an
              overall score of 50-79, depending on the program. Scores are valid for two years and are
              accepted for academic admissions, professional registration, and visa applications worldwide.
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Enquiry Section */}
      <Box sx={{ bgcolor: "white", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              height: { xs: 200, md: 280 },
              borderRadius: 4,
              overflow: "hidden",
              mb: 6,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
              alt="Enquiry Background"
              fill
              style={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  px: 2,
                }}
              >
                Enquire More Directly
              </Typography>
            </Box>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 900, mx: "auto" }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": { borderColor: "#6B4FA1" },
                      "&.Mui-focused fieldset": { borderColor: "#6B4FA1" },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": { borderColor: "#6B4FA1" },
                      "&.Mui-focused fieldset": { borderColor: "#6B4FA1" },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": { borderColor: "#6B4FA1" },
                      "&.Mui-focused fieldset": { borderColor: "#6B4FA1" },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": { borderColor: "#6B4FA1" },
                      "&.Mui-focused fieldset": { borderColor: "#6B4FA1" },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#3d1a4d",
                    px: 8,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    "&:hover": {
                      bgcolor: "#2a1136",
                    },
                  }}
                >
                  Enquiry Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
