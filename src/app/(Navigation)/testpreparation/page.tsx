"use client";

import HeroSection from "@/components/hero/HeroSection";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "motion/react";
import Link from "next/link";
import { testPreparationCards } from "@/data/testPrepData";
import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';

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

      {/* Test Preparation Ladder Timeline */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box sx={{ position: 'relative', px: { xs: 2, md: 4 } }}>
          {/* Central Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              bgcolor: '#e0e0e0',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' }
            }}
          />

          {/* Test Preparation Items */}
          {testPreparationCards.map((card, index) => {
            const isLeft = index % 2 === 0;
            const iconMap: Record<string, typeof TranslateIcon> = {
              japaneselanguage: TranslateIcon,
              sswpreparation: WorkIcon,
              ielts: SchoolIcon,
              pte: LanguageIcon
            };
            const IconComponent = iconMap[card.slug] || TranslateIcon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
                    alignItems: 'center',
                    mb: 6,
                    gap: { xs: 2, md: 4 }
                  }}
                >
                  {/* Content Card */}
                  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                    <Link href={`/testpreparation/${card.slug}`}>
                      <Paper
                        elevation={2}
                        sx={{
                          p: { xs: 3, md: 4 },
                          borderRadius: 2,
                          bgcolor: 'white',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 6,
                            borderColor: card.color
                          },
                          border: '2px solid transparent'
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: '#2a1136',
                            fontSize: { xs: '1rem', md: '1.25rem' }
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#6b7280',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.875rem', md: '1rem' }
                          }}
                        >
                          {card.description}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 2,
                            color: '#6B4FA1',
                            fontWeight: 500,
                            fontSize: '0.875rem'
                          }}
                        >
                          Learn More →
                        </Typography>
                      </Paper>
                    </Link>
                  </Box>

                  {/* Timeline Dot (Desktop) */}
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      bgcolor: '#6B4FA1',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: '0 4px 12px rgba(107, 79, 161, 0.3)'
                    }}
                  >
                    <IconComponent sx={{ color: 'white', fontSize: 28 }} />
                  </Box>

                  {/* Spacer */}
                  <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                </Box>

                {/* Mobile Icon */}
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: '#6B4FA1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 4,
                    boxShadow: '0 4px 12px rgba(107, 79, 161, 0.3)'
                  }}
                >
                  <IconComponent sx={{ color: 'white', fontSize: 24 }} />
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
