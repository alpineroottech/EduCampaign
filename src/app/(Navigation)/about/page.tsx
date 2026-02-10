"use client";

import HeroSection from "@/components/hero/HeroSection";
import { Box, Container, Typography, Paper, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { socialIcons } from "@/data/socialData";
import { introContent, teamMembers, missionVision, whyUsCards } from "@/data/aboutData";
import { useRef } from "react";

export default function AboutUs() {
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);


  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#faf7fc" }}>
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        title="About Us"
      />

      {/* Lazy Reveal Introduction Section */}
      <div className="pt-16 pb-2">
        <Container maxWidth="xl">
          <motion.div ref={introRef} style={{ opacity, y }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: "white",
              border: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 6 },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "40%" },
                  height: { xs: 240, sm: 320, md: 360 },
                  borderRadius: 3,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={introContent.image}
                  alt="About Edu Campaign"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#3d1a4d",
                    mb: 3,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  {introContent.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {introContent.paragraph}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>
        </Container>
      </div>

      {/* Horizontal Scroll - Why Choose Us Cards */}
      {/* CONTACT US SECTION */}
      <div className="pt-16 pb-2">
        <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#3d1a4d",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Ready to Start Your Journey?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Have questions about studying abroad? We're here to guide you every step of the way.
            </Typography>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: "inline-block" }}
            >
              <Box
                component="button"
                sx={{
                  px: 6,
                  py: 2,
                  bgcolor: "#6B4FA1",
                  color: "white",
                  border: "none",
                  borderRadius: 2,
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: "#5a3f8a",
                    boxShadow: 3,
                  },
                }}
              >
                Contact Us Now
              </Box>
            </motion.a>
          </Paper>
        </motion.div>
        </Container>
      </div>

      {/* MISSION & VISION CARDS */}
      <div className="pt-16 pb-2">
        <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {missionVision.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#e9d5f5",
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#6B4FA1",
                    mb: 2,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                  }}
                >
                  {item.content}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
        </Container>
      </div>

      {/* TEAM SECTION */}
      <div className="pt-16 pb-2 bg-[#faf7fc]">
        <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontWeight: "bold",
            color: "#3d1a4d",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Meet Our Team
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 3, md: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: "100%", sm: 240, md: 260 },
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 96, md: 128 },
                    height: { xs: 96, md: 128 },
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: 2,
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="128px"
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontSize: { xs: "0.95rem", md: "1rem" } }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  {member.position}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
        </Container>
      </div>
    </Box>
  );
}
