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
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
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

      {/* Horizontal Scroll - Why Choose Us Cards */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#ebe9e1" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#3d1a4d",
              mb: 6,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            Why Choose Us?
          </Typography>

          {/* Horizontal Scroll Container with Scroll Snap */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              pb: 2,
              // Hide scrollbar while maintaining functionality
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              // Mobile: full width cards, Desktop: fit content
              "& > *": {
                scrollSnapAlign: "center",
                flexShrink: 0,
                width: { xs: "85%", sm: "70%", md: "400px" },
              },
            }}
          >
            {whyUsCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    minHeight: 420,
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 200,
                      bgcolor: "grey.200",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 85vw, 400px"
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        color: "#6B4FA1",
                        mb: 2,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CONTACT US SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              bgcolor: "white",
            }}
          >
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
              Contact Us
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 4, md: 6 },
              }}
            >

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Address */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      bgcolor: "error.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      flexShrink: 0,
                      boxShadow: 2,
                    }}
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                      Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      DILLIBAZAR-30, GURJUMARGA, Kathmandu 44605, Nepal
                    </Typography>
                  </Box>
                </Box>

                {/* Phone */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      flexShrink: 0,
                      boxShadow: 2,
                    }}
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59L15 15.41a1 1 0 011-.24 11.36 11.36 0 003.53.56 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.28a1 1 0 011 1 11.36 11.36 0 00.56 3.53 1 1 0 01-.24 1z" />
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      01-4500074
                    </Typography>
                  </Box>
                </Box>

                {/* Mail */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      bgcolor: "warning.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      flexShrink: 0,
                      boxShadow: 2,
                    }}
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1l-10 6L2 5V4zm0 4.236V20a2 2 0 002 2h16a2 2 0 002-2V8.236l-10 6-10-6z" />
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                      Mail Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-word" }}>
                      Educampaign2008@gmail.com<br />Info@educampaign.com.np
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 3,
                  }}
                >
                  Follow Us
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    p: { xs: 2, sm: 3 },
                    borderRadius: 3,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 3,
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {socialIcons.slice(0, 4).map((item, index) => (
                      <Box
                        key={index}
                        component="a"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          textDecoration: "none",
                          color: "text.primary",
                          transition: "opacity 0.2s",
                          "&:hover": { opacity: 0.7 },
                        }}
                      >
                        <Box sx={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {item.icon}
                        </Box>
                        <Typography variant="body2">{item.label}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {socialIcons.slice(4).map((item, index) => (
                      <Box
                        key={index}
                        component="a"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          textDecoration: "none",
                          color: "text.primary",
                          transition: "opacity 0.2s",
                          "&:hover": { opacity: 0.7 },
                        }}
                      >
                        <Box sx={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {item.icon}
                        </Box>
                        <Typography variant="body2">{item.label}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      {/* MISSION & VISION CARDS */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
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

      {/* TEAM SECTION */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, bgcolor: "#faf7fc" }}>
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
    </Box>
  );
}
