"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import { importantDocuments } from "@/data/servicesData";
import { motion } from "motion/react";
import { CheckCircle } from "@mui/icons-material";

export default function ImportantDocuments() {
  return (
    <div className="pt-16 pb-2 bg-white" id="importantDocs">
      <Container maxWidth="xl">
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
            {importantDocuments.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "text.secondary", maxWidth: "800px", mx: "auto" }}
          >
            Before you head to the airport, ensure you have your document folder ready and accessible in your carry-on luggage.
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              maxWidth: "900px",
              mx: "auto",
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: "linear-gradient(135deg, #f8f4ff 0%, #ffffff 100%)",
              border: "2px solid #e0d4f7",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#6B4FA1",
                mb: 4,
                textAlign: "center",
              }}
            >
              Must-Carry Documents
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
              }}
            >
              {importantDocuments.items.map((item, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: "#6B4FA1",
                      fontSize: 28,
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.8,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                mt: 5,
                p: 3,
                borderRadius: 2,
                bgcolor: "#fff9e6",
                border: "1px solid #ffd966",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#856404",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>💡</span>
                <strong>Tip:</strong> Keep digital copies of all these documents in your email or cloud storage for emergency access.
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
}
