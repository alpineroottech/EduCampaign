"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const documentItems = [
  { icon: "/images/documents/password.png", title: "Passport" },
  { icon: "/images/documents/tickets.png", title: "Tickets" },
  { icon: "/images/documents/visadocs.png", title: "Visa Documents" },
  { icon: "/images/documents/offerleter.png", title: "Offer Letter" },
  { icon: "/images/documents/forex.png", title: "FOREX-TC's, Cash, Draft" },
  { icon: "/images/documents/accommodation.png", title: "Accommodation Details" },
  { icon: "/images/documents/academic.png", title: "Original Academic documents" },
  { icon: "/images/documents/ecoe (2).png", title: "ECOE" },
];

export default function ImportantDocuments() {
  return (
    <div className="pt-16 pb-16 bg-white" id="importantDocs">
      <Container maxWidth="xl">
        <Box sx={{ mb: 6, px: { xs: 2, md: 0 } }}>
          <Typography
            component="h3"
            sx={{
              textAlign: "left",
              p: 2,
              bgcolor: "#e5e7eb",
              maxWidth: "672px",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            Important Documents To Carry
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
            px: { xs: 2, md: 0 },
          }}
        >
          {documentItems.map((doc, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: { xs: 2, sm: 1.5 },
                border: "1px solid #d1d5db",
                borderRadius: 4,
                p: 2,
                bgcolor: "white",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#e9d5ff",
                  borderColor: "#e9d5ff",
                  transform: "scale(1.03)",
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={doc.icon}
                  alt={doc.title}
                  width={64}
                  height={64}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  fontWeight: 500,
                  color: "#1a1a1a",
                }}
              >
                {doc.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
}
