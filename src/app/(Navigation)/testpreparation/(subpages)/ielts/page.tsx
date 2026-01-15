"use client";

import { useState } from "react";
import HeroSection from "@/components/hero/HeroSection";
import { Box, Container, Typography, Paper, Card, CardContent, TextField, Button, Grid } from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";

export default function Ielts() {
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
      title: "Listening (30 min)",
      description:
        "Four recorded monologues and conversations. Tasks include multiple-choice, matching, plan/map labeling, form completion, note completion, table completion, flow-chart completion, and sentence completion using recordings of native English speakers in various contexts.",
    },
    {
      title: "Reading (60 min)",
      description:
        "Academic: Three long reading passages with tasks from descriptive and factual to discursive and analytical. General Training: Extracts from books, magazines, notices, advertisements, and company guidelines on everyday topics.",
    },
    {
      title: "Writing (60 min)",
      description:
        "Academic: Task 1 involves describing visual information (graphs, charts) in 150 words; Task 2 requires an essay response in 250 words. General Training: Task 1 is letter writing; Task 2 is an essay on a point of view or problem.",
    },
    {
      title: "Speaking (11–14 min)",
      description:
        "A face-to-face interview with an examiner in three parts: Introduction and interview (4-5 min), Long turn where you speak about a topic for 1-2 minutes (3-4 min), and Discussion with examiner on abstract ideas related to Part 2 (4-5 min).",
    },
  ];

  const features = [
    "Comprehensive training in all four skills: Listening, Reading, Writing, and Speaking",
    "Experienced instructors with proven track records in IELTS preparation",
    "Regular full-length practice tests simulating actual exam conditions",
    "Personalized feedback and one-on-one speaking practice sessions",
    "Extensive study materials including practice books and online resources",
    "Strategies and techniques for each section to maximize your band score",
    "Flexible class schedules including weekend and evening batches",
    "Small batch sizes ensuring individual attention and support",
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#faf7fc" }}>
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        title="IELTS Preparation"
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
            IELTS (International English Language Testing System) is the world's most popular English
            proficiency test for study, work, and migration, accepted by over 11,000 institutions globally
            including universities, employers, immigration authorities, and professional bodies. It assesses
            your ability to listen, read, write, and speak in English through a comprehensive evaluation
            process recognized internationally.
          </Typography>
        </motion.div>

        {/* Test Types */}
        <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#3d1a4d",
              mb: 3,
              textAlign: "center",
            }}
          >
            Two Main Test Types
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
            <Card sx={{ flex: 1, borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6B4FA1", mb: 2 }}>
                  Academic IELTS
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Designed for those applying to higher education or professional registration. It assesses
                  whether you're ready to begin studying or training in an environment where English is the
                  language of communication, focusing on academic language and study-related contexts.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ flex: 1, borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6B4FA1", mb: 2 }}>
                  General Training IELTS
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Suitable for migration to Australia, Canada, New Zealand, and the UK, or for secondary
                  education and work experience programs. It focuses on basic survival skills in broad social
                  and workplace contexts, testing practical everyday English language skills.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Paper>

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
          Four Test Sections
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {testSections.map((section, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
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
            Our IELTS Preparation Course Features
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
              IELTS scores are reported on a 9-band scale, with each section scored individually and
              averaged for an overall band score. Band scores range from 1 (Non-user) to 9 (Expert user).
              Most universities require a minimum overall band score of 6.0-7.5, depending on the program.
              Scores are valid for two years from the test date.
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
