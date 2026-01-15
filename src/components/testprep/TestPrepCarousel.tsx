"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestPreparationCard } from "@/data/testPrepData";

interface TestPrepCarouselProps {
  cards: TestPreparationCard[];
}

export default function TestPrepCarousel({ cards }: TestPrepCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 10000, // 10 seconds auto-scroll
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <Box sx={{ position: "relative", width: "100%", mx: "auto", py: { xs: 2, md: 3 } }}>
      {/* Carousel Container */}
      <Box ref={emblaRef} sx={{ overflow: "hidden", px: { xs: 1.5, md: 3 } }}>
        <Box sx={{ display: "flex", gap: { xs: 2, md: 3 } }}>
          {cards.map((card) => (
            <Box
              key={card.id}
              sx={{
                flex: { xs: "0 0 calc(100% - 24px)", md: "0 0 calc(35% - 12px)" },
                minWidth: 0,
                px: 0,
              }}
            >
              <Link href={`/testpreparation/${card.slug}`} passHref legacyBehavior>
                <Box
                  component={motion.a}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    height: "100%",
                  }}
                >
                  <Card
                    sx={{
                      position: "relative",
                      height: "100%",
                      minHeight: { xs: 336, md: 364 },
                      borderRadius: 3,
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: 3,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      flexDirection: "column",
                      mb: '10px',
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 8,
                      },
                    }}
                  >
                    {/* Image Section with 4:3 Aspect Ratio */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "75%",
                        bgcolor: card.color,
                        overflow: "hidden",
                      }}
                    >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={selectedIndex === parseInt(card.id) - 1}
                      />
                      {/* Gradient Overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "30%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Content Section - Fixed Height */}
                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: { xs: 2, md: 2.5 },
                      bgcolor: "white",
                    }}
                  >
                    <Box>
                      {/* Icon */}
                      <Box
                        sx={{
                          position: "relative",
                          width: 36,
                          height: 36,
                          mb: 1.5,
                        }}
                      >
                        <Image
                          src={card.icon}
                          alt={`${card.title} Icon`}
                          width={36}
                          height={36}
                          style={{ objectFit: "contain" }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          color: "#6B4FA1",
                          mb: 1.5,
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          lineHeight: 1.3,
                        }}
                      >
                        {card.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          fontSize: { xs: "0.8rem", md: "0.85rem" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: { xs: 3, md: 4 },
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        sx={{
          position: "absolute",
          left: { xs: "5%", md: "3%" },
          top: "40%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(4px)",
          boxShadow: 2,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          zIndex: 10,
          "&:hover": {
            bgcolor: "rgba(107, 79, 161, 0.9)",
            color: "white",
          },
          "&:disabled": {
            opacity: 0.3,
          },
        }}
      >
        <ChevronLeft size={28} />
      </IconButton>

      <IconButton
        onClick={scrollNext}
        disabled={!canScrollNext}
        sx={{
          position: "absolute",
          right: { xs: "5%", md: "1%" },
          top: "40%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(4px)",
          boxShadow: 2,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          zIndex: 10,
          "&:hover": {
            bgcolor: "rgba(107, 79, 161, 0.9)",
            color: "white",
          },
          "&:disabled": {
            opacity: 0.3,
          },
        }}
      >
        <ChevronRight size={28} />
      </IconButton>

      {/* Dot Indicators */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          mt: 4,
        }}
      >
        {Array.from({ length: Math.ceil(cards.length / 2) }).map((_, index) => (
          <Box
            key={index}
            onClick={() => emblaApi?.scrollTo(index * 2)}
            sx={{
              width: selectedIndex === index * 2 || selectedIndex === index * 2 + 1 ? 32 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor:
                selectedIndex === index * 2 || selectedIndex === index * 2 + 1
                  ? "#6B4FA1"
                  : "grey.300",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor:
                  selectedIndex === index * 2 || selectedIndex === index * 2 + 1
                    ? "#6B4FA1"
                    : "grey.400",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
