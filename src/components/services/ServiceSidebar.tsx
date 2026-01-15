"use client";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServiceDetail } from "../../data/servicesData";

interface ServiceSidebarProps {
  services: ServiceDetail[];
}

export default function ServiceSidebar({ services }: ServiceSidebarProps) {
  const pathname = usePathname();

  return (
    <Box component="aside" sx={{ width: "100%" }}>
      {/* Navigation Menu */}
      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: 3 }}>
        <List component="nav" sx={{ p: 0 }}>
          {services.map((service) => {
            const isActive = pathname.includes(service.slug);
            return (
              <ListItem key={service.id} disablePadding>
                <ListItemButton
                  component={Link}
                  href={`/services/${service.slug}`}
                  selected={isActive}
                  sx={{
                    borderLeft: "6px solid",
                    borderLeftColor: isActive ? "#6B4FA1" : "transparent",
                    bgcolor: isActive ? "rgba(107, 79, 161, 0.08)" : "transparent",
                    "&.Mui-selected": {
                      bgcolor: "rgba(107, 79, 161, 0.12)",
                      "&:hover": { bgcolor: "rgba(107, 79, 161, 0.16)" },
                    },
                    "&:hover": { bgcolor: "rgba(107, 79, 161, 0.04)" },
                  }}
                >
                  <ListItemText
                    primary={service.title}
                    primaryTypographyProps={{
                      fontWeight: isActive ? "bold" : "medium",
                      color: isActive ? "#6B4FA1" : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Card>

      {/* Lead Gen Form */}
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
            Request Information
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Full Name"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
            <TextField
              label="Mobile No."
              type="tel"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
            <TextField
              label="City"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Query"
              multiline
              rows={4}
              variant="outlined"
              size="small"
              fullWidth
            />
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                bgcolor: "#6B4FA1", // Primary Purple from guidelines
                "&:hover": { bgcolor: "#3d1a4d" }, // Dark Accent
                textTransform: "none",
                fontWeight: "bold",
                mt: 1,
              }}
            >
              Send Request
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
